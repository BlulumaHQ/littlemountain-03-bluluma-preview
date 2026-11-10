// Adds `X-Robots-Tag: noindex` to HTML responses ONLY when the request host is a
// platform/preview domain. Custom production domains are untouched (stay indexable).
const PLATFORM_HOST = /(^|\.)(lovable\.app|workers\.dev|pages\.dev|netlify\.app)$/i;

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const host = new URL(request.url).hostname;
  const response = await context.next();
  if (!PLATFORM_HOST.test(host)) return response;
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;
  const headers = new Headers(response.headers);
  headers.set("X-Robots-Tag", "noindex");
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};

export const config = { path: "/*" };
