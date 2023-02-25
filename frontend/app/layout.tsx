"use client";

import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Tracker App | Homepage</title>
        <meta name="description" content="Tracker App" />
        <link rel="icon" href="/next.svg" />
      </head>
      <body className="font-sans" id="__next">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
