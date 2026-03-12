'use client';

import "./globals.css";
import { AppGenProvider } from "./components/appgen-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>UniFlow</title>
        <meta name="description" content="Built with AppGen" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" />
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
      </head>
      <body className="antialiased">
        <AppGenProvider>{children}</AppGenProvider>
      </body>
    </html>
  );
}
