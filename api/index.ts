// This handler bridges TanStack Start server to Vercel Functions
export default async function handler(req: any, res: any) {
  try {
    // Filter out static assets
    if (req.url.match(/\.(js|css|png|jpg|gif|svg|ico|json|woff|woff2|ttf|eot)(\?.*)?$/)) {
      return res.status(404).json({ error: "Not found" });
    }

    // Load the TanStack Start server
    const { startInstance } = await import("../src/start");
    
    if (!startInstance || typeof startInstance.fetch !== "function") {
      throw new Error("Server instance has no fetch method");
    }

    // Build the request URL
    const url = `${req.headers["x-forwarded-proto"] || "http"}://${
      req.headers["x-forwarded-host"] || req.headers.host
    }${req.url}`;

    // Create web request
    const webRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD", "OPTIONS"].includes(req.method) ? null : req.body,
    });

    // Call the server
    const response = await startInstance.fetch(webRequest);

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
    });

    res.status(500).json({
      error: "Internal Server Error",
      message: error?.message || "Unknown error",
    });
  }
}

