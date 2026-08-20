import Script from "next/script";
import LanguageProvider from "../i18n/LanguageProvider";
import WhatsAppFloatingBadge from "../components/layout/WhatsAppFloatingBadge";
import SocialRail from "../components/layout/SocialRail";

import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/chrome.css";
import "../styles/home.css";
import "../styles/blog.css";

export const metadata = {
  title: "Whaid",
  description:
    "Asistente conversacional para descubrir información útil dentro de organizaciones y espacios comerciales.",
  icons: {
    icon: "/assets/whaid-mark.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="light">
      <body>
        <LanguageProvider>
          {children}
          <SocialRail />
          <WhatsAppFloatingBadge />
        </LanguageProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YEFM85QX6V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YEFM85QX6V');
          `}
        </Script>
        <Script src="/wa-chat.js" strategy="afterInteractive" />
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
