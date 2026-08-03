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

  return (
    <div className={classes} id={id} aria-hidden={hidden ? "true" : undefined}>
      <div className="web-panel__bar">
        <div className="web-panel__dots"><span></span><span></span><span></span></div>
        <div className="web-panel__url"><span className="lock">🔒</span><span><TranslatedText i18nKey={urlKey} /></span></div>
      </div>
      <div className="web-panel__body">
        <p className="web-panel__eyebrow"><TranslatedText i18nKey={eyebrowKey} /></p>
        <h4 className="web-panel__title"><TranslatedText i18nKey={titleKey} /></h4>

        <div className="web-panel__list">
          {rows.map((row) => (
            <div className={`web-panel__row ${row.tone || "ok"}`} key={row.id}>
              <span className="id"><TranslatedText i18nKey={row.idKey} /></span>
              <span className="name"><TranslatedText i18nKey={row.nameKey} /></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
