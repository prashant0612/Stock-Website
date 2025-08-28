import Link from "next/link";
import React from "react";

const NotFound = ({ Symbol }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#292E3F] px-4 py-12 font-mono">
      <div className="w-full max-w-md bg-[#212639] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="p-6 sm:p-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-50 mb-6">
              <svg
                className="h-10 w-10 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3">
              No Results Found
            </h3>

            <p className="text-white mb-6 leading-relaxed">
              We couldn't find any stocks matching{" "}
              <span className="font-black">{Symbol}</span>. Please check the
              symbol or try a different search term.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Search Tips:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1 pl-6">
                <li>Check for typos in the stock symbol</li>
                <li>Try searching by company name instead</li>
                <li>
                  Ensure you're using the correct exchange suffix if needed
                </li>
              </ul>
            </div>
            <Link href={"/"}>
              <button className="bg-blue-400 rounded-md p-2 cursor-pointer px-3">
                Search Another Stocks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
