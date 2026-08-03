"use client";

import {useEffect, useMemo, useState} from "react";
import useLanguage from "../../../i18n/useLanguage";

export default function QaStrip() {
  const {dictionary} = useLanguage();
  const qaCopy = dictionary.qa_strip;
  const [activeQaTab, setActiveQaTab] = useState(null);
  const [activeQaItem, setActiveQaItem] = useState(null);

  useEffect(() => {
    const firstTabId = qaCopy?.tabs?.[0]?.id || null;
    setActiveQaTab((prev) => {
      if (!qaCopy?.tabs?.length) return null;
      const exists = qaCopy.tabs.some((tab) => tab.id === prev);
      return exists ? prev : firstTabId;
    });
    setActiveQaItem(null);
  }, [qaCopy]);

  const activeTab = useMemo(
    () => qaCopy?.tabs?.find((tab) => tab.id === activeQaTab) || qaCopy?.tabs?.[0],
    [qaCopy, activeQaTab]
  );

  return (
      <section className="logos qa-strip" aria-label="QA Strip">
        <div className="container">
          <p className="logos__label qa-strip__label">{qaCopy?.label || ""}</p>

          <div className="qa-strip__tabs" role="tablist" aria-label={qaCopy?.label || ""}>
            {qaCopy?.tabs?.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab?.id === tab.id}
                aria-controls={`qa-panel-${tab.id}`}
                className={`qa-strip__tab ${activeTab?.id === tab.id ? "qa-strip__tab--active" : ""}`}
                onClick={() => {
                  setActiveQaTab(tab.id);
                  setActiveQaItem(null);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="logos__row qa-strip__row" id={`qa-panel-${activeTab?.id || "default"}`} role="tabpanel">
            {activeTab?.items?.map((item, index) => {
              const itemId = `${activeTab.id}-${index}`;
              const isActive = activeQaItem === itemId;
              return (
                <button
                  key={itemId}
                  type="button"
                  className={`qa-strip__item ${isActive ? "qa-strip__item--active" : ""}`}
                  onMouseEnter={() => setActiveQaItem(itemId)}
                  onMouseLeave={() => setActiveQaItem(null)}
                  onFocus={() => setActiveQaItem(itemId)}
                  onBlur={() => setActiveQaItem(null)}
                  onClick={() => setActiveQaItem((prev) => (prev === itemId ? null : itemId))}
                  aria-expanded={isActive}
                  aria-label={item.question}
                >
                  <span className="qa-strip__question">{item.question}</span>
                  <span className="qa-strip__answer">{item.answer}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
  );
}
