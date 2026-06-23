export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://whaid.co").replace(/\/$/, "");

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/whaid.co/",
    ariaLabel: "Instagram de Whaid",
    icon: "instagram",
  },
  {
    name: "X",
    href: "https://x.com/whaid_co",
    ariaLabel: "X de Whaid",
    icon: "x",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@whaid",
    ariaLabel: "YouTube de Whaid",
    icon: "youtube",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/whaid",
    ariaLabel: "LinkedIn de Whaid",
    icon: "linkedin",
  },
];
