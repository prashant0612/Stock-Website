import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stock Ticker App",
  description: "Track live stock prices, trends, and investment insights.",
  openGraph: {
    title: "Stock Ticker App",
    description: "Track live stock prices, trends, and investment insights.",
    url: "https://localhost:3000",
    siteName: "Stock Ticker App",
    images: [
      {
        url: "/Image/stockIcon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/Image/stockIcon.png",
  },
  twitter: {
    title: "Stock Ticker App",
    description: "Track live stock prices, trends, and investment insights.",
    images: ["/Image/stockIcon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
