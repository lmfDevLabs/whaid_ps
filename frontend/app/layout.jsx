import LanguageProvider from "../i18n/LanguageProvider";
import CookieConsentProvider from "../components/cookies/CookieConsentProvider";
import WhatsAppFloatingBadge from "../components/layout/WhatsAppFloatingBadge";
import SocialRail from "../components/layout/SocialRail";

import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/chrome.css";
import "../styles/home.css";
import "../styles/blog.css";
import "../styles/legal.css";

export const metadata = {
  title: "Whaid",
  description:
    "Asistente conversacional para descubrir información útil dentro de organizaciones y espacios comerciales.",
  icons: {
    icon: "/assets/whaid-mark.svg",
  },
};

const themeInitializationScript = `
  try {
    const storedTheme = window.localStorage.getItem("whaid:theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  } catch (error) {
    // Keep the dark default when storage is unavailable.
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{__html: themeInitializationScript}} />
      </head>
      <body>
        <LanguageProvider>
          <CookieConsentProvider>
            {children}
            <SocialRail />
            <WhatsAppFloatingBadge />
          </CookieConsentProvider>
        </LanguageProvider>
        <script src="/wa-chat.js" async />
        <script src="/site.js" async />
      </body>
    </html>
  );
}
