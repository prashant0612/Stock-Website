"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getTickers } from "@/app/api/service";

const TickerBar = () => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const loadStockData = async () => {
      const data = await getTickers();
      setTickers(data);
    };

    loadStockData();

    const interval = setInterval(loadStockData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-indigo-600 text-white py-2 w-full text-sm overflow-hidden relative">
      <div className="tickerMain">
        <div className="tickerInner group">
          {tickers?.length > 0 ? (
            <>
              {tickers.map((ticker, idx) => (
                <Link
                  key={`${ticker.symbol}-${idx}`}
                  href={`/stock/${ticker.symbol}`}
                  className="mx-3 hover:underline"
                >
                  {ticker.symbol}: ₹{ticker.close}
                  {ticker.change >= 0 ? (
                    <span className="text-green-300 ml-1">
                      ▲ {ticker.percent.toFixed(2)}%
                    </span>
                  ) : (
                    <span className="text-red-300 ml-1">
                      ▼ {ticker.percent.toFixed(2)}%
                    </span>
                  )}
                </Link>
              ))}
            </>
          ) : (
            <p className="mx-4 text-center">Loading tickers...</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .tickerMain {
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .tickerInner {
          display: inline-flex;
          white-space: nowrap;
          animation: tickerMain 30s linear infinite;
        }
        /* Pause on hover */
        .tickerInner:hover {
          animation-play-state: paused;
        }
        @keyframes tickerMain {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default TickerBar;
