// This handler bridges TanStack Start server to Vercel Functions
import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default async function handler(req: any, res: any) {
  try {
    // Try to load the built server module
    let server: any;
    
    try {
      // Try the standard TanStack Start build output path
      const serverPath = join(__dirname, "../dist/server/index.mjs");
      server = await import(serverPath);
      server = server.default || server;
    } catch (e1) {
      try {
        // Fallback to package entry
        const entry = await import("@tanstack/react-start/server");
        server = entry.default || entry;
      } catch (e2) {
        console.error("[API] Failed to load server", { e1: String(e1), e2: String(e2) });
        return res.status(500).json({
          error: "Internal Server Error",
          message: "Server module not found",
        });
      }
    }

    if (!server || typeof server.fetch !== "function") {
      return res.status(500).json({
        error: "Internal Server Error",
        message: "Server has no fetch method",
      });
    }

    // Build request URL
    const protocol = req.headers["x-forwarded-proto"] || "http";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const url = `${protocol}://${host}${req.url}`;

    // Create Web Request
    const webRequest = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ["GET", "HEAD", "OPTIONS"].includes(req.method) ? null : JSON.stringify(req.body),
    });

    // Get response from server
    const response = await server.fetch(webRequest);

    // Send response back
    res.status(response.status);
    response.headers.forEach((value: string, key: string) => {
      res.setHeader(key, value);
    });

    const body = await response.text();
    res.send(body);
  } catch (error: any) {
    console.error("[API Error]", error);
    res.status(500).json({
      error: "Internal Server Error",
      message: error?.message || String(error),
    });
  }
}

