function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;"})[character]);
}

export function buildDemoEmail(data, date = new Date()) {
  const fields = [["Nombre", `${data.firstName} ${data.lastName}`], ["Organización", data.company], ["Correo", data.email], ["Teléfono", data.phone || "No indicado"], ["Tamaño del equipo", data.teamSize], ["Mensaje", data.message], ["Fecha (UTC)", date.toISOString()], ["Idioma", data.locale], ["Página de origen", data.source]];
  const text = fields.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = `<div style="font-family:Arial,sans-serif;color:#251828"><h1>Nueva solicitud de demo</h1>${fields.map(([label, value]) => `<p><strong>${label}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`).join("")}</div>`;
  return {text, html};
}

export async function sendDemoEmail(data, fetchImpl = fetch) {
  const {RESEND_API_KEY: apiKey, DEMO_FORM_TO_EMAIL: to, DEMO_FORM_FROM_EMAIL: from} = process.env;
  if (!apiKey || !to || !from) throw new Error("EMAIL_NOT_CONFIGURED");
  const content = buildDemoEmail(data);
  const response = await fetchImpl("https://api.resend.com/emails", {method: "POST", headers: {"Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json"}, body: JSON.stringify({from, to: [to], reply_to: data.email, subject: "Nueva solicitud de demo de Whaid", ...content}), signal: AbortSignal.timeout(10000)});
  if (!response.ok) throw new Error("EMAIL_PROVIDER_FAILED");
}
