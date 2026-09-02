import crypto from "node:crypto";
import {getFirestore, Timestamp} from "firebase-admin/firestore";

export const RATE_LIMIT_MAX = Number(process.env.DEMO_RATE_LIMIT_MAX || 3);
export const RATE_LIMIT_WINDOW_MS = Number(process.env.DEMO_RATE_LIMIT_WINDOW_MINUTES || 15) * 60 * 1000;

export function deriveRateLimitKey(ip, secret = process.env.DEMO_RATE_LIMIT_SECRET) {
  if (!secret) throw new Error("RATE_LIMIT_NOT_CONFIGURED");
  return crypto.createHmac("sha256", secret).update(ip || "unknown").digest("hex");
}

export function rateLimitDecision(current, now = Date.now()) {
  const started = current?.windowStartedAt?.toMillis?.() || 0;
  if (!current || now - started >= RATE_LIMIT_WINDOW_MS) return {allowed: true, count: 1, reset: true};
  if (current.count >= RATE_LIMIT_MAX) return {allowed: false, count: current.count, reset: false};
  return {allowed: true, count: current.count + 1, reset: false};
}

export async function consumeRateLimit(ip, db = getFirestore(), now = Date.now()) {
  const key = deriveRateLimitKey(ip);
  const ref = db.collection("demo_form_rate_limits").doc(key);
  return db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(ref);
    const current = snapshot.exists ? snapshot.data() : null;
    const decision = rateLimitDecision(current, now);
    if (decision.reset) {
      transaction.set(ref, {count: 1, windowStartedAt: Timestamp.fromMillis(now), expiresAt: Timestamp.fromMillis(now + RATE_LIMIT_WINDOW_MS * 2)});
      return true;
    }
    if (!decision.allowed) return false;
    transaction.update(ref, {count: decision.count, expiresAt: Timestamp.fromMillis(now + RATE_LIMIT_WINDOW_MS * 2)});
    return true;
  });
}
