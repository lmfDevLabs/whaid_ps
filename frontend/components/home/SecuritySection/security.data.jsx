export const SECURITY_CARDS = [
  {
    id: "public-data",
    titleKey: "security_card_public_title",
    textKey: "security_card_public_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
  {
    id: "restricted-access",
    titleKey: "security_card_access_title",
    textKey: "security_card_access_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <path d="M12 15v2" />
      </svg>
    ),
  },
  {
    id: "cloud-security",
    titleKey: "security_card_cloud_title",
    textKey: "security_card_cloud_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H8a5 5 0 1 1 .9-9.9A6 6 0 0 1 20 11.5 3.8 3.8 0 0 1 17.5 19z" />
        <path d="M12 18s3-1.5 3-4v-2l-3-1-3 1v2c0 2.5 3 4 3 4z" />
      </svg>
    ),
  },
  {
    id: "traceability",
    titleKey: "security_card_traceability_title",
    textKey: "security_card_traceability_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        <path d="M14 20l2 2 4-5" />
      </svg>
    ),
  },
];
