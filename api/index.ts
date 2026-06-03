import type { VercelRequest, VercelResponse } from "@vercel/node";

// This handler bridges TanStack Start server to Vercel Functions
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Import the actual server - TanStack Start exports a fetch handler
    const serverModule = await import("../dist/server/index.mjs");
    const server = serverModule.default;

    if (!server || typeof server.fetch !== "function") {
      console.error("Server module does not export a fetch handler");
      return res.status(500).json({ error: "Server initialization failed" });
    }

    // Build a Web Request from Vercel's request
    const url = `${req.headers["x-forwarded-proto"] || "http"}://${
      req.headers["x-forwarded-host"] || req.headers.host
    }${req.url}`;

    const request = new Request(url, {
      method: req.method,
      headers: new Headers(
        Object.fromEntries(
          Object.entries(req.headers).map(([k, v]) => [
            k,
            Array.isArray(v) ? v[0] : (v || ""),
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
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Send response body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error("[Vercel API Error]", error);
    res.status(500).json({
      error: "Internal Server Error",
      details: process.env.NODE_ENV === "development" ? String(error) : undefined,
    });
  }
}

