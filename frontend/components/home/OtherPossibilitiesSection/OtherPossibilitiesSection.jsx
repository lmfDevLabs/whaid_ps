import TranslatedText from "../../../i18n/TranslatedText";
import VideoEmbed from "./VideoEmbed";
import {OTHER_POSSIBILITIES_MEDIA} from "./otherPossibilities.data";

export default function OtherPossibilitiesSection() {
  return (
    <section className="section section--other-possibilities" id="other-possibilities" aria-labelledby="other-possibilities-title">
      <div className="container">
        <div className="other-possibilities reveal">
          <div className="other-possibilities__head">
            <h2 id="other-possibilities-title"><TranslatedText i18nKey="other_possibilities_title" /></h2>
            <p className="other-possibilities__intro"><TranslatedText i18nKey="other_possibilities_intro" /></p>
          </div>

          <div className="other-possibilities__cards">
            <article className="other-possibility-card other-possibility-card--real-estate">
              <div className="other-possibility-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
              </div>
              <VideoEmbed {...OTHER_POSSIBILITIES_MEDIA.realEstate} />
              <h3><TranslatedText i18nKey="other_possibilities_real_estate_title" /></h3>
              <p><TranslatedText i18nKey="other_possibilities_real_estate_description" /></p>
              <ul className="other-possibility-card__prompts">
                <li><TranslatedText i18nKey="other_possibilities_real_estate_prompt_1" /></li>
                <li><TranslatedText i18nKey="other_possibilities_real_estate_prompt_2" /></li>
                <li><TranslatedText i18nKey="other_possibilities_real_estate_prompt_3" /></li>
              </ul>
            </article>

            <article className="other-possibility-card other-possibility-card--inventory">
              <div className="other-possibility-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></svg>
              </div>
              <VideoEmbed {...OTHER_POSSIBILITIES_MEDIA.inventory} />
              <h3><TranslatedText i18nKey="other_possibilities_inventory_title" /></h3>
              <p><TranslatedText i18nKey="other_possibilities_inventory_description" /></p>
              <ul className="other-possibility-card__prompts">
                <li><TranslatedText i18nKey="other_possibilities_inventory_prompt_1" /></li>
                <li><TranslatedText i18nKey="other_possibilities_inventory_prompt_2" /></li>
                <li><TranslatedText i18nKey="other_possibilities_inventory_prompt_3" /></li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

  );
}
