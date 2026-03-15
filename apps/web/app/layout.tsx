'use client';

import "./globals.css";
import { AppGenProvider } from "./components/appgen-provider";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KLVPG47S');`,
          }}
        />
        
        {/* Primary Meta Tags */}
        <title>UniDesk - All-in-One CRM & WhatsApp Business Platform</title>
        <meta name="description" content="UniDesk: Unified CRM & WhatsApp Business Platform. Manage leads, automate customer conversations, and grow your business. Free trial. 2,500+ active businesses trust UniDesk." />
        <meta name="keywords" content="CRM software, WhatsApp business API, lead management, sales automation, customer relationship management, WhatsApp marketing, business automation India" />
        <meta name="author" content="UniDesk" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://unidesk.in/" />
        <meta property="og:title" content="UniDesk - All-in-One CRM & WhatsApp Business Platform" />
        <meta property="og:description" content="Unified CRM & WhatsApp platform for managing leads, automating sales conversations, and growing your business. Free 14-day trial." />
        <meta property="og:image" content="https://app-cdn.appgen.com/0e496fc5-3050-498f-ade1-610fc9ef6d40/assets/uploaded_1773130812759_gt5bks.png" />
        <meta property="og:site_name" content="UniDesk" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://unidesk.in/" />
        <meta property="twitter:title" content="UniDesk - All-in-One CRM & WhatsApp Business Platform" />
        <meta property="twitter:description" content="Unified CRM & WhatsApp platform for managing leads, automating sales conversations, and growing your business. Free 14-day trial." />
        <meta property="twitter:image" content="https://app-cdn.appgen.com/0e496fc5-3050-498f-ade1-610fc9ef6d40/assets/uploaded_1773130812759_gt5bks.png" />
        <meta property="twitter:creator" content="@unidesk_crm" />
        
        {/* Mobile & App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UniDesk" />
        <meta name="theme-color" content="#1f2937" />
        
        {/* Robots & Indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://unidesk.in/" />
        
        {/* Verification & Analytics */}
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        
        {/* Business Info Structured Data */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"UniDesk","description":"All-in-One CRM & WhatsApp Business Platform","url":"https://unidesk.in","logo":"https://app-cdn.appgen.com/0e496fc5-3050-498f-ade1-610fc9ef6d40/assets/uploaded_1773130812759_gt5bks.png","sameAs":["https://facebook.com/unidesk.crm","https://twitter.com/unidesk_crm","https://linkedin.com/company/unidesk_crm","https://instagram.com/unidesk_crm"],"address":{"@type":"PostalAddress","addressCountry":"IN","addressRegion":"India"},"contactPoint":{"@type":"ContactPoint","telephone":"9625878600","contactType":"Customer Service","email":"support@unidesk.in"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"2500"}})}</script>
        
        {/* Product Schema */}
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"UniDesk","description":"Unified CRM & WhatsApp Business API platform","applicationCategory":"BusinessApplication","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","ratingCount":"2500"},"offers":{"@type":"Offer","price":"0","priceCurrency":"INR","category":"Free Trial"},"operatingSystem":"Web","url":"https://unidesk.in"})}</script>
        
        {/* Fonts & Styles */}
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
        
        {/* Preconnect to External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLVPG47S" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        
        <AppGenProvider>{children}</AppGenProvider>
      </body>
    </html>
  );
}
