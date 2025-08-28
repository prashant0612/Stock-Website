# 📈 Stock Ticker Web App  

A simple stock ticker app built with **Next.js + React** that lets you:  
- 🔍 Search stocks with live autocomplete  
- 🏷️ View NIFTY gainers, losers, and volume movers (auto-refreshes every minute)  
- 📊 Check detailed stock info (price, market cap, P/E, ROE, ROCE) with interactive charts  
- ❌ See a friendly error page if a stock isn’t found  

---

## 🚀 Getting Started  

1. Clone the repo  
```bash
git clone https://github.com/prashant0612/Stock-Website.git
cd Stock-Website
```

2. Install dependencies  
```bash
npm install
```

3. Run the app  
```bash
npm run dev
```

👉 Open [http://localhost:3000](http://localhost:3000) in your browser.  

---

## 🗂️ Project Structure  

| File/Folder | Purpose |
|-------------|---------|
| `Components/SearchAutoComplete.jsx` | Stock search with live suggestions |
| `Components/TickerBar.jsx` | Live scrolling ticker of NIFTY movers |
| `Components/StockDetails.jsx` | Stock details + chart |
| `utils/NotFound.jsx` | Friendly 404 page |
| `api/service.js` | All API calls (tickers, search, stock data) |
| `app/page.js` | Home page with ticker + search |
| `app/[symbol]/page.jsx` | Stock details page |

---

## ⚙️ APIs Used  
- `/api/assignment/index/NIFTY/movers/` → NIFTY gainers/losers/volume movers  
- `/api/assignment/search` → Stock search  
- `/api/assignment/stock/{symbol}/prices?...` → Stock price history  

---

## 📦 Tech Stack  
- Next.js (App Router)  
- React  
- lucide-react (icons)  
- recharts (charts)  

---

## 🌐 Deployment  
Deploy easily on **Vercel** → [Vercel Docs](https://vercel.com/docs)  
