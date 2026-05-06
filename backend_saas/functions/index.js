import {setGlobalOptions} from "firebase-functions/v2";
import {onRequest} from "firebase-functions/v2/https";
import app from "./src/app.js";

setGlobalOptions({maxInstances: 10});

export const api = onRequest({region: "us-central1"}, app);
