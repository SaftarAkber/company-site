import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/session";

export const runtime = "nodejs"; // crypto modulu üçün lazımdır

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_session")?.value;
  const isLoggedIn = verifySessionToken(token);
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (req.nextUrl.pathname.startsWith("/admin") && !isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }
  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };