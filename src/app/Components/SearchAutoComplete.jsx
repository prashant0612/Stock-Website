"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { searchStocks } from "@/app/api/service";
import { Search } from "lucide-react";

export default function SearchAutocomplete() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        fetchResults(query);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const fetchResults = async (keyword) => {
    const data = await searchStocks(keyword);
    setResults(data);
  };

  return (
    <div className="w-full max-w-xl mx-auto  px-2 sm:px-4 md:px-0">
      {/* Search Box */}
      <div className="flex items-center bg-white backdrop-blur-md border border-gray-300 rounded-md px-3 py-2 sm:px-4 sm:py-2 shadow-md focus-within:ring-2 focus-within:ring-indigo-400 transition duration-300">
        <Search
          className="text-gray-500 mr-2 sm:mr-3 flex-shrink-0"
          size={20}
        />
        <input
          type="text"
          className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base"
          placeholder="Search stocks..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Dropdown Results */}
      {results?.length > 0 && (
        <ul className="w-full bg-white/95 backdrop-blur-lg border border-gray-200 mt-2 sm:mt-3 rounded-md shadow-2xl overflow-hidden animate-fadeIn max-h-72 overflow-y-auto">
          {results.map((stock, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-gradient-to-r from-indigo-50 to-indigo-100 transition-colors border-b border-gray-200"
              onClick={() => router.push(`/stock/${stock.symbol}`)}
            >
              <span className="text-sm sm:text-base font-semibold text-gray-700">
                {stock.symbol}
              </span>
              {stock.name && (
                <span className="mt-1 sm:mt-0 text-xs sm:text-sm text-gray-500 truncate">
                  {stock.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
