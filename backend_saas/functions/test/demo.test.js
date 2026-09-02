import test from "node:test";
import assert from "node:assert/strict";
import {parseDemoPayload} from "../src/validation/demo.schema.js";
import {buildDemoEmail} from "../src/services/demo-email.service.js";
import {deriveRateLimitKey, rateLimitDecision} from "../src/services/rate-limit.service.js";
import {verifyTurnstile} from "../src/services/turnstile.service.js";
import {sendDemoEmail} from "../src/services/demo-email.service.js";

const valid = {firstName: " Ana ", lastName: "Martínez", email: "ANA@example.com", company: "Whaid", teamSize: "1-10", phone: "", message: "Necesito una demostración", locale: "es", source: "https://whaid.co/#demo", contactCode: "", turnstileToken: "token"};

test("accepts and normalizes a valid submission", () => {
  const value = parseDemoPayload(valid); assert.equal(value.firstName, "Ana"); assert.equal(value.email, "ana@example.com");
});
test("rejects empty required fields", () => assert.equal(parseDemoPayload({...valid, firstName: ""}), null));
test("rejects invalid email", () => assert.equal(parseDemoPayload({...valid, email: "bad"}), null));
test("rejects an oversized message", () => assert.equal(parseDemoPayload({...valid, message: "x".repeat(2001)}), null));
test("rejects missing Turnstile token", () => assert.equal(parseDemoPayload({...valid, turnstileToken: ""}), null));
test("retains a filled bot-trap value for the controller to reject", () => assert.equal(parseDemoPayload({...valid, contactCode: "filled"}).contactCode, "filled"));
test("rejects unexpected payload keys", () => assert.equal(parseDemoPayload({...valid, admin: true}), null));
test("escapes visitor content in HTML and retains plain text", () => {
  const email = buildDemoEmail({...valid, message: "<script>alert('x')</script>"}); assert.doesNotMatch(email.html, /<script>/); assert.match(email.text, /<script>/);
});
test("derives stable opaque rate-limit keys", () => {
  const key = deriveRateLimitKey("203.0.113.1", "secret"); assert.equal(key, deriveRateLimitKey("203.0.113.1", "secret")); assert.doesNotMatch(key, /203/);
});
test("blocks repeated requests after the configured maximum", () => assert.equal(rateLimitDecision({count: 3, windowStartedAt: {toMillis: () => Date.now()}}).allowed, false));
test("rejects an invalid or expired Turnstile token", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test"; const result = await verifyTurnstile({token: "bad", ip: "", fetchImpl: async () => ({ok: true, json: async () => ({success: false})})}); assert.equal(result, false);
});
test("surfaces a mail provider failure", async () => {
  Object.assign(process.env, {RESEND_API_KEY: "test", DEMO_FORM_TO_EMAIL: "to@example.com", DEMO_FORM_FROM_EMAIL: "from@example.com"}); await assert.rejects(() => sendDemoEmail(valid, async () => ({ok: false})), /EMAIL_PROVIDER_FAILED/);
});
