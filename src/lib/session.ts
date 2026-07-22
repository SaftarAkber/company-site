import crypto from "crypto";

const SECRET = process.env.SESSION_SECRET!;
export const SESSION_MAX_AGE = 60 * 60 * 24; // 1 gün (saniyə)

export function createSessionToken() {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = String(expires);
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

export function verifySessionToken(token?: string | null) {
  if (!token) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  if (!crypto.timingSafeEqual(a, b)) return false;
  return Date.now() < Number(payload); // vaxtı bitibsə etibarsız say
}