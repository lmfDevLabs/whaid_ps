import {setGlobalOptions} from "firebase-functions/v2";
import {onRequest} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import app from "./src/app.js";

setGlobalOptions({maxInstances: 10});

const secretNames = ["RESEND_API_KEY", "DEMO_FORM_TO_EMAIL",
  "TURNSTILE_SECRET_KEY", "DEMO_RATE_LIMIT_SECRET"];
const secrets = secretNames.map((name) => defineSecret(name));
export const api = onRequest({region: "us-central1", secrets}, app);
