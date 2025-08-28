import Head from "next/head";
import TickerBar from "./Components/TickerBar";
import SearchAutocomplete from "./Components/SearchAutoComplete";
import { getTickers } from "./api/service";

export const metadata = {
  title: "Stock Ticker Website",
  description:
    "Track live stock prices, trends, and search for stocks instantly with our Stock Ticker Website.",
  keywords:
    "stocks, stock ticker, live stock prices, finance, market trends, stock search",
  author: "Prashant Verma",
  robots: "index, follow",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#292E3F]">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://localhost:3000" />
        <meta property="og:image" content="/Image/stockIcon.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Image/stockIcon.png" />
      </Head>

      <TickerBar />

      <div className="flex flex-col items-center py-20  font-mono">
        <h1 className="text-3xl font-bold mb-6">{metadata.title}</h1>
        <SearchAutocomplete />
      </div>
    </div>
  );
}
