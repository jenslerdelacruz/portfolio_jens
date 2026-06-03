// This handler bridges TanStack Start server to Vercel Functions
export default async function handler(req: any, res: any) {
  try {
    // Try different possible import paths for the built server
    let server: any;
    const possiblePaths = [
      "../dist/server/index.mjs",
      "../dist/server.mjs",
      "../dist/index.mjs",
      "../.output/server/index.mjs",
    ];

    for (const path of possiblePaths) {
      try {
        const module = await import(path);
        server = module.default || module;
        if (server && typeof server.fetch === "function") {
          console.log(`[Server] Loaded from: ${path}`);
          break;
        }
      } catch (e) {
        console.log(`[Server] Path ${path} not found, trying next...`);
      }
    }

    if (!server || typeof server.fetch !== "function") {
      console.error("[Server] No valid server module found with fetch handler");
      return res
        .status(500)
        .json({
          error: "Internal Server Error",
          message: "Server module not found or invalid",
        });
    }

    // Build a Web Request from Vercel's request
    const url = `${req.headers["x-forwarded-proto"] || "http"}://${
      req.headers["x-forwarded-host"] || req.headers.host
    }${req.url}`;

    const request = new Request(url, {
      method: req.method,
      headers: new Headers(
        Object.fromEntries(
          Object.entries(req.headers).map(([k, v]: [string, any]) => [
            k,
            Array.isArray(v) ? v[0] : v || "",
          ])
        )
      ),
      body: ["GET", "HEAD", "OPTIONS"].includes(req.method || "GET")
        ? null
        : JSON.stringify(req.body),
    });

    // Call the TanStack Start server
    const response = await server.fetch(request, {}, {});

    // Copy response status and headers
    res.status(response.status);
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });

    // Send response body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("[Vercel API Error]", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: String(error),
    });
  }
}

