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
        <div className="web-panel__url"><span className="lock">🔒</span><span data-i18n={urlKey}>{url}</span></div>
      </div>
      <div className="web-panel__body">
        <p className="web-panel__eyebrow" data-i18n={eyebrowKey}>{eyebrow}</p>
        <h4 className="web-panel__title" data-i18n={titleKey}>{title}</h4>

        <div className="web-panel__list">
          {rows.map((row) => (
            <div className={`web-panel__row ${row.tone || "ok"}`} key={row.id}>
              <span className="id" data-i18n={row.idKey}>{row.id}</span>
              <span className="name" data-i18n={row.nameKey}>{row.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
