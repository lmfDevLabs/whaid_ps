import TranslatedText from "../../i18n/TranslatedText";
export default function WhaidVisualResponseCard({
  id,
  className = "",
  url = "whaid.app/expoandina/piso-2",
  urlKey,
  eyebrowKey = "panel_eyebrow",
  eyebrow = "Vista visual · Opciones encontradas",
  titleKey = "panel_title",
  title = "3 marcas · 1 promoción",
  rows = [],
  hidden = false,
}) {
  const classes = ["web-panel", className].filter(Boolean).join(" ");
  const translatedOrFallback = (key, fallback) => (
    key ? <TranslatedText i18nKey={key} /> : fallback
  );

  return (
    <div className={classes} id={id} aria-hidden={hidden ? "true" : undefined}>
      <div className="web-panel__bar">
        <div className="web-panel__dots"><span></span><span></span><span></span></div>
        <div className="web-panel__url"><span className="lock">🔒</span><span>{translatedOrFallback(urlKey, url)}</span></div>
      </div>
      <div className="web-panel__body">
        <p className="web-panel__eyebrow">{translatedOrFallback(eyebrowKey, eyebrow)}</p>
        <h4 className="web-panel__title">{translatedOrFallback(titleKey, title)}</h4>

        <div className="web-panel__list">
          {rows.map((row) => (
            <div className={`web-panel__row ${row.tone || "ok"}`} key={row.id}>
              <span className="id">{translatedOrFallback(row.idKey, row.id)}</span>
              <span className="name">{translatedOrFallback(row.nameKey, row.name)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
