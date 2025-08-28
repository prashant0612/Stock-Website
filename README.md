Getting Started
1.	Clone the Repo
git clone https://github.com/prashant0612/Stock-Website.git
cd your_repo
2.	Install Dependencies
npm install
3.	Run the App
npm run dev
Then go to http://localhost:3000 in your browser!

Open http://localhost:3000 with your browser to see the result.
You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
This project uses `next/font` to automatically optimize and load Geist, a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:
•	Next.js Documentation - learn about Next.js features and API.
•	Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.
Check out our Next.js deployment documentation for more details.

📈 Stock Ticker Web App
Welcome! This project is a live stock ticker app built with Next.js and React, which lets you search for stocks, follow movers in the NIFTY index, and view detailed stock info and charts—all powered by the TradeBrains API.
Features
•   🔍 Search for stocks: Instantly find stocks as you type, with autocomplete suggestions.
•   🏷️ Live Ticker Bar: See major movers (gainers, losers, and high-volume) in the NIFTY index, auto-updating every minute.
•   📊 Detailed Stock View: Click a ticker/search result to see real-time stats (price, market cap, P/E, ROE, ROCE), plus an interactive price chart.
•   ❌ Graceful Error Handling: Friendly “Not Found” message if a symbol doesn’t exist.
 
 
Folder / File Guide
File    What it Does
Components/SearchAutoComplete.jsx   Search bar with live suggestions as you type. Uses TradeBrains search API.
Components/TickerBar.jsx    Streams a scrolling list of top NIFTY movers. Fetches and updates every 60 sec.
Components/StockDetails.jsx Shows a detailed view for a single stock: main numbers & interactive chart.
utils/NotFound.jsx  Friendly 404 display for unknown stock symbols.
api/service.js  All API calls: get stock price details, search stocks, get tickers.
page.jsx ([symbol] dynamic page)    The page for details for a specific stock symbol.
page.js (home page) Entry page with TickerBar and Search.
Main Dependencies
•   Next.js (App router)
•   React
•   lucide-react (icons)
•   recharts (charts)
 
How It Works
•   TickerBar pulls NIFTY gainers, losers, and volume movers from TradeBrains and shows them in a scrolling bar. Data updates every minute for live accuracy.
•   SearchAutoComplete takes any keyword, hits the stock search API, and drops down matching stock options in real time as you type.
•   StockDetails needs the selected stock data and its price history. It displays all the essentials (open, high, low, previous close, etc.) and a time-based price chart.
•   NotFound handles errors gracefully if someone tries to open an invalid stock symbol.
All backend calls live in api/service.js, using fetch from the browser/server to talk to the external API endpoints.
 
API Details
The app contacts the following endpoints:
•   /api/assignment/index/NIFTY/movers/ - for tickers
•   /api/assignment/search - for autocomplete search
•   /api/assignment/stock/{symbol}/prices?days=1&type=INTRADAY&limit=10 - for prices/historical data
