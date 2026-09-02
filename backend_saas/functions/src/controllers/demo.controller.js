import {parseDemoPayload} from "../validation/demo.schema.js";
import {verifyTurnstile} from "../services/turnstile.service.js";
import {consumeRateLimit} from "../services/rate-limit.service.js";
import {sendDemoEmail} from "../services/demo-email.service.js";

function clientIp(req) {
  return req.get("cf-connecting-ip") || req.get("x-forwarded-for")?.split(",")[0].trim() || req.ip || "unknown";
}

export async function submitDemo(req, res) {
  if (!req.is("application/json")) return res.status(415).json({ok: false, code: "INVALID_REQUEST"});
  const allowedOrigins = (process.env.DEMO_ALLOWED_ORIGINS || "").split(",").map((item) => item.trim()).filter(Boolean);
  if (allowedOrigins.length && req.get("origin") && !allowedOrigins.includes(req.get("origin"))) return res.status(403).json({ok: false, code: "INVALID_REQUEST"});
  const data = parseDemoPayload(req.body);
  if (!data) return res.status(400).json({ok: false, code: "INVALID_REQUEST"});
  if (data.contactCode) return res.status(400).json({ok: false, code: "INVALID_REQUEST"});
  const ip = clientIp(req);
  try {
    if (!(await verifyTurnstile({token: data.turnstileToken, ip}))) return res.status(400).json({ok: false, code: "VERIFICATION_FAILED"});
    if (!(await consumeRateLimit(ip))) return res.status(429).json({ok: false, code: "RATE_LIMITED"});
    await sendDemoEmail(data);
    return res.status(200).json({ok: true});
  } catch (error) {
    console.error("Demo form processing failed", {type: error?.message || "UNKNOWN"});
    return res.status(503).json({ok: false, code: "TEMPORARY_ERROR"});
  }
}
