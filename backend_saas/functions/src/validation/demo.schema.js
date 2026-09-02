const KEYS = ["firstName", "lastName", "email", "company", "teamSize", "phone", "message", "locale", "source", "contactCode", "turnstileToken"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (value) => value.trim().replace(/\s+/g, " ");

export function parseDemoPayload(input) {
  if (!input || typeof input !== "object" || Array.isArray(input) || Object.keys(input).some((key) => !KEYS.includes(key)) || KEYS.some((key) => typeof input[key] !== "string")) return null;
  const data = {...input, firstName: clean(input.firstName), lastName: clean(input.lastName), email: clean(input.email).toLowerCase(), company: clean(input.company), phone: clean(input.phone), message: input.message.trim(), source: input.source.trim(), turnstileToken: input.turnstileToken.trim()};
  if (data.firstName.length < 2 || data.firstName.length > 60 || data.lastName.length < 2 || data.lastName.length > 60 || !EMAIL.test(data.email) || data.email.length > 254 || data.company.length < 2 || data.company.length > 120 || !["1-10", "11-50", "51-200", "200+"].includes(data.teamSize) || data.phone.length > 30 || data.message.length < 10 || data.message.length > 2000 || !["es", "en"].includes(data.locale) || data.source.length > 200 || data.contactCode.length > 200 || data.turnstileToken.length < 1 || data.turnstileToken.length > 2048) return null;
  try {
    new URL(data.source);
  } catch {
    return null;
  }
  return data;
}
