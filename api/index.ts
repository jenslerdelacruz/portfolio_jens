// This handler bridges TanStack Start server to Vercel Functions
export default async function handler(req: any, res: any) {
  try {
    // For static assets, let Vercel serve them directly
    if (req.url.match(/\.(js|css|png|jpg|gif|svg|ico|json|woff|woff2|ttf|eot)(\?.*)?$/)) {
      return res.status(404).json({ error: "Not found" });
    }

    // Try to load the built server
    let serverModule: any;

    try {
      // Import the built server from dist
      const { default: server } = await import("../dist/server/index.mjs");
      serverModule = server;
    } catch (e) {
      console.error("[API] Failed to load server from dist:", e);
      
      // Try fallback import
      try {
        const entry = await import("@tanstack/react-start/server");
        serverModule = entry.default || entry;
      } catch (e2) {
        console.error("[API] Fallback import also failed:", e2);
        throw new Error("Could not load server module");
      }
    }

    if (!serverModule || typeof serverModule.fetch !== "function") {
      throw new Error("Server module has no fetch method");
    }

    // Build the URL
    const url = `${req.headers["x-forwarded-proto"] || "http"}://${
      req.headers["x-forwarded-host"] || req.headers.host
    }${req.url}`;

    // Create web request
    const webRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD", "OPTIONS"].includes(req.method) ? null : req.body,
    });

    // Call server
    const response = await serverModule.fetch(webRequest);

    // Return response
    res.status(response.status);
    for (const [key, value] of response.headers) {
      res.setHeader(key, value);
    }

    const body = await response.text();
    res.send(body);
  } catch (error: any) {
    console.error("[API Handler Error]", {
      message: error?.message,
      stack: error?.stack,
      url: req.url,
      method: req.method,
    });

    res.status(500).json({
      error: "Internal Server Error",
      details: process.env.NODE_ENV === "development" ? error?.message : undefined,
    });
  }
}

