"use client";
import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

const StockDetails = ({ stockData, StockPriceDetails }) => {
  const isPositive = stockData.change >= 0;

  const formattedData =
    StockPriceDetails?.map((item) => ({
      date: new Date(item.date).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      close: item.close,
    })) || [];

  return (
    <div className="max-w-2xl bg-[#212639] p-4 lg:p-10 rounded-2xl shadow-xl">
      <h1 className="text-2xl font-semibold text-white mb-6">
        {stockData?.comp_name} ({stockData?.symbol})
      </h1>

      <div className="flex items-center justify-between mb-6">
        <span className="text-5xl font-bold text-white">
          ₹{stockData?.close.toFixed(2)}
        </span>
        <span
          className={`flex items-center gap-2 text-xl font-semibold ${
            isPositive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isPositive ? <ArrowUp size={22} /> : <ArrowDown size={22} />}
          {stockData.change.toFixed(2)} ({stockData.percent.toFixed(2)}%)
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200 pt-6">
        <div>
          <p className="text-sm text-white">Open</p>
          <p className="text-lg font-semibold text-white">{stockData.open}</p>
        </div>
        <div>
          <p className="text-sm text-white">High</p>
          <p className="text-lg font-semibold text-white">{stockData.high}</p>
        </div>
        <div>
          <p className="text-sm text-white">Low</p>
          <p className="text-lg font-semibold text-white">{stockData.low}</p>
        </div>
        <div>
          <p className="text-sm text-white">Prev Close</p>
          <p className="text-lg font-semibold text-white">
            {stockData.prev_close}
          </p>
        </div>
        <div>
          <p className="text-sm text-white">Market Cap</p>
          <p className="text-lg font-semibold text-white">
            {stockData.mcap.toLocaleString()} Cr
          </p>
        </div>
        <div>
          <p className="text-sm text-white">P/E Ratio</p>
          <p className="text-lg font-semibold text-white">
            {stockData.pe.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-white">ROE (TTM)</p>
          <p className="text-lg font-semibold text-white">
            {stockData.roe_ttm.toFixed(2)}%
          </p>
        </div>
        <div>
          <p className="text-sm text-white">ROCE (TTM)</p>
          <p className="text-lg font-semibold text-white">
            {stockData.roce_ttm.toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="mt-8">
        {formattedData?.length > 0 ? (
          <>
            <h2 className="text-white font-medium mb-3">Price Trend</h2>
            <div className="h-72 text-white">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={formattedData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={"#fff"} />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#fff" }} />
                  <YAxis
                    domain={["dataMin", "dataMax"]}
                    tick={{ fill: "#fff" }}
                  />
                  <Tooltip formatter={(value) => [`₹${value}`, "Price"]} />
                  <Line
                    type="monotone"
                    dataKey="close"
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#2563eb" }}
                  >
                    <LabelList
                      dataKey="close"
                      position="top"
                      formatter={(value) => `₹${value}`}
                      style={{ fontSize: 12, fill: "#fff" }}
                    />
                  </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        ) : (
          <p className="text-white mt-6 text-center bg-gray-600 rounded-md p-3">
            Graph Not Found
          </p>
        )}
      </div>
    </div>
  );
};

export default StockDetails;
