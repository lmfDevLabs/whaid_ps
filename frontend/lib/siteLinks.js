export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://whaid.co").replace(/\/$/, "");

export const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/whaidrag/",
    ariaLabel: "Instagram de Whaid",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@whaidrag",
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
