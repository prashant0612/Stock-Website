import { getStockPriceData, getTickers } from "@/app/api/service";
import NotFound from "@/utils/NotFound";
import StockDetails from "@/app/Components/StockDetails";
import Head from "next/head";
import React from "react";

const Page = async ({ params }) => {
  const Symbol = params?.symbol;
  const getNiftyData = await getTickers();
  const stockData = getNiftyData.find((item) => item.symbol === Symbol);

  if (!stockData) {
    return <NotFound Symbol={Symbol} />;
  }

  const StockPriceDetails = await getStockPriceData(Symbol);

  const description = `Get detailed information, live prices, and historical data for ${stockData.comp_name} (${Symbol}). Stay updated with stock trends and charts.`;
  const keywords = `${stockData.comp_name}, ${Symbol}, stock price, stock chart, Nifty stocks, investment, financial data`;

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{`${stockData.comp_name} (${Symbol}) - Stock Price & Chart`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://localhost:3000/stocks/${Symbol}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${stockData.comp_name} (${Symbol}) - Stock Price & Chart`}
        />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://localhost:3000/stocks/${Symbol}`}
        />
        <meta property="og:site_name" content="Your Stock Website Name" />
        <meta property="og:image" content={`/Image/stockIcon.png`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${stockData.comp_name} (${Symbol}) - Stock Price & Chart`}
        />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content={`https://localhost:3000/images/stocks/${Symbol}.png`}
        />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              name: stockData.comp_name,
              identifier: Symbol,
              url: `https://localhost:3000/stocks/${Symbol}`,
              description: description,
            }),
          }}
        />
      </Head>

      <div className="bg-[#292E3F] w-full min-h-screen flex justify-center lg:p-10 p-5 font-mono">
        <StockDetails
          symbol={Symbol}
          stockData={stockData}
          StockPriceDetails={StockPriceDetails}
        />
      </div>
    </>
  );
};

export default Page;
