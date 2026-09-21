import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Avoid interfering with static files, API routes, or Next internal routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Detect subdomains (e.g. solar.ekosys.in, facade.localhost:3000, etc.)
  const cleanHost = host.split(":")[0];
  const parts = cleanHost.split(".");

  // If subdomain is present and not 'www'
  if (parts.length > 2 && parts[0] !== "www") {
    const subdomain = parts[0].toLowerCase();
    const validSubdomains = ["solar", "facade", "medtech", "designlab", "itsolution"];

    if (validSubdomains.includes(subdomain)) {
      // Set a request header for downstream layouts/components to know active division
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-ekosys-subdomain", subdomain);
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
