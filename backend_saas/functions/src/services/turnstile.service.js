const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile({token, ip, fetchImpl = fetch}) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) throw new Error("TURNSTILE_NOT_CONFIGURED");
  const body = new URLSearchParams({secret, response: token});
  if (ip) body.set("remoteip", ip);
  const response = await fetchImpl(VERIFY_URL, {method: "POST", body, signal: AbortSignal.timeout(8000)});
  if (!response.ok) return false;
  const result = await response.json();
  const allowed = (process.env.TURNSTILE_ALLOWED_HOSTNAMES || "").split(",").map((item) => item.trim()).filter(Boolean);
  return result.success === true && (allowed.length === 0 || allowed.includes(result.hostname));
}
