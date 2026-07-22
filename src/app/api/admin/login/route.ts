import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSessionToken, SESSION_MAX_AGE } from "@/lib/session";

export async function POST(req: Request) {
  const { password } = await req.json();

  const valid = await bcrypt.compare(password ?? "", process.env.ADMIN_PASSWORD_HASH!);
  if (!valid) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("admin_session", createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}