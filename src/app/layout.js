import Footer from "@/components/Common/Footer/Footer";
import "./globals.css";
import Nav from "@/components/Common/nav/Nav";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font Awesome CDN — totally fine */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-***********"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* ✅ Bootstrap CSS CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />

        {/* ✅ Proper way to load external scripts in Next.js */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
