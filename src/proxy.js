import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const { pathname } = request.nextUrl;

    if (
        pathname === "/" ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }
  return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: '/about',
  matcher: '/:path*',
}