"use server";
export async function getStockPriceData(symbol) {
  try {
    const response = await fetch(
      `https://portal.tradebrains.in/api/assignment/stock/${symbol}/prices?days=1&type=INTRADAY&limit=10`,
      { cache: "no-store" }
    );

    const data = await response.json();

    return data || data?.data || data?.data?.data || null;
  } catch (error) {
    return null;
  }
}

export async function getTickers() {
  try {
    const res = await fetch(
      "https://portal.tradebrains.in/api/assignment/index/NIFTY/movers/",
      { cache: "no-store" }
    );
    const json = await res.json();

    const allTickers = [
      ...(json.gainers || []),
      ...(json.losers || []),
      ...(json.volume_movers || []),
    ];

    return allTickers;
  } catch (error) {
    console.error(" Error fetching tickers:", error);
    return [];
  }
}

export const searchStocks = async (keyword) => {
  if (!keyword) return [];
  try {
    const res = await fetch(
      `https://portal.tradebrains.in/api/assignment/search?keyword=${encodeURIComponent(
        keyword
      )}&length=10`
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching stocks:", error);
    return [];
  }
};
