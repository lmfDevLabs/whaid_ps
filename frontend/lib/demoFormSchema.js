export const DEMO_FORM_LIMITS = Object.freeze({
  firstName: [2, 60],
  lastName: [2, 60],
  email: [5, 254],
  company: [2, 120],
  phone: [0, 30],
  message: [10, 2000],
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

export function normalizeDemoForm(values) {
  return {
    firstName: clean(values.firstName),
    lastName: clean(values.lastName),
    email: clean(values.email).toLowerCase(),
    company: clean(values.company),
    teamSize: clean(values.teamSize),
    phone: clean(values.phone),
    message: typeof values.message === "string" ? values.message.trim() : "",
    locale: values.locale === "en" ? "en" : "es",
    source: clean(values.source).slice(0, 200),
    contactCode: clean(values.contactCode),
    turnstileToken: clean(values.turnstileToken),
  };
}

export function validateDemoForm(values) {
  const data = normalizeDemoForm(values);
  const errors = {};
  for (const field of ["firstName", "lastName", "company", "message"]) {
    const [min, max] = DEMO_FORM_LIMITS[field];
    if (data[field].length < min || data[field].length > max) errors[field] = "length";
  }
  if (!EMAIL_PATTERN.test(data.email) || data.email.length > DEMO_FORM_LIMITS.email[1]) errors.email = "email";
  if (data.phone.length > DEMO_FORM_LIMITS.phone[1]) errors.phone = "length";
  if (!["1-10", "11-50", "51-200", "200+"].includes(data.teamSize)) errors.teamSize = "required";
  if (!data.turnstileToken) errors.turnstileToken = "required";
  return {data, errors, success: Object.keys(errors).length === 0};
}
