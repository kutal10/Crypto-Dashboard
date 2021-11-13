<h1 align="center">
  Cryptocurrency Dashboard
</h1>

<h4 align="center">A dashboard that displays main and altcoin price movements over variable time horizons</h4>

<p align="center">
  <a href="#background">Background</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#further-reading-on-cryptocurrencies">Further reading on cryptocurrencies</a>
</p>

<p align="center">
  <img src="https://i.imgur.com/EfvcCix.jpg" width =600/>
</p>  
  
## Background

### What are cryptocurrencies

### Why are cryptocurrencies so volatile

News developments and speculation are responsible for fueling price swings in crypto and mainstream markets alike. But their effect is exaggerated in crypto markets as they have less liquidity than traditional financial markets — a result of crypto markets lacking a robust ecosystem of institutional investors and large trading firms.

But, there are signs that volatility in crypto markets is turning a corner. Institutional investors and trading firms are beginning to enter the asset class with more conviction, and a derivatives market for cryptocurrencies is also beginning to take shape as part of the development and expansion of the broader crypto market ecosystem.

### What are altcoins

<p align="center">
  <img src="https://i.imgur.com/lLDVFdC.jpg" width =600/>
</p>

Altcoins are cryptocurrencies other than Bitcoin (BTCUSD). They share characteristics with Bitcoin but are also different in other ways. For example, some altcoins use a different consensus mechanism to produce blocks or validate transactions. Or they distinguish themselves from Bitcoin by providing new or additional capabilities, such as smart contracts or low price volatility.

As of November 2021, there are over 10,000 cryptocurrencies. According to CoinMarketCap, altcoins accounted for nearly 60% of the total cryptocurrency market in November 2021.1

Because they are derived from Bitcoin, altcoin price movements tend to mimic Bitcoin's trajectory. However, analysts say the maturity of cryptocurrency investing ecosystems and the development of new markets for these coins will make price movements for altcoins independent of Bitcoin's trading signals.

> The above extract was taken from [Investopedia](https://www.investopedia.com/terms/a/altcoin.asp), which contains further details about topics such as Altcoin investing, FAQ's and the Future of Altcoins

### How the project is structured

<p align="center">
  <img src="https://i.imgur.com/Y3CC2F6.jpg" width =400/>
</p>

The project's folder structure groups different elements together:

- **App:** Generates the dashboard and also contains the Cryptocompare API instruction file
- **Settings:** Contains behavioural files (e.g. what happens when a tile is clicked, when the coins selected are confirmed, when the search bar is used)
- **Dashboard:** Files that structure how the dashboard, tiles, charts and buttons are laid out on screen
- **Shared:** Includes all the general files required for core components such as colours and the styles of the tiles

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kutal10/Algorithmic-Art-Studies

# Install Dependencies
$ npm install

#generate your own API key from CryptoCompare and open src/App/AppProvider.js and update the key
https://www.cryptocompare.com/coins/guides/how-to-use-our-api/

# Open http://localhost:3000 to view it in the browser after starting React Project
$ npm start
```

## Credits

The files in this study cover the following open source packages:

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Highcharts](https://www.highcharts.com/)
- [Styled Components](https://styled-components.com/)
- [Cryptocompare's API](https://www.cryptocompare.com/coins/guides/how-to-use-our-api/)
- [Moment](https://momentjs.com/)

## Further reading on cryptocurrencies

[Bitcoin White Paper](https://www.ussc.gov/sites/default/files/pdf/training/annual-national-training-seminar/2018/Emerging_Tech_Bitcoin_Crypto.pdf) - A great read on cryptocurrency fundamentals
[Bitcoin Technicals](https://www.goodreads.com/book/show/35432045-mastering-bitcoin?from_search=true&from_srp=true&qid=3vyaW2z3E9&rank=1) - A great book on the technical foundations of bitcoin
[Coin Telegraph](https://cointelegraph.com/) - A good crypto news site
[Rust in Cryptocurrency](https://elib.uni-stuttgart.de/bitstream/11682/9311/1/thesis.pdf) - White paper on Rust applications
