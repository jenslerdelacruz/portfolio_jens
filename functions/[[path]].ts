import type { PagesFunction } from '@cloudflare/workers-types';

export const onRequest: PagesFunction = async (context) => {
  const { pathname } = new URL(context.request.url);
  
  // Serve static assets directly
  if (pathname.startsWith('/assets/') || pathname === '/favicon.svg') {
    return context.env.ASSETS.fetch(context.request);
  }

  // Import and use the TanStack Start server for everything else
  try {
    const { default: handler } = await import('../dist/server/index.js');
    return await handler.fetch(context.request, context.env, context);
  } catch (e) {
    console.error('Server error:', e);
    return new Response('Internal Server Error', { status: 500 });
  }
};
