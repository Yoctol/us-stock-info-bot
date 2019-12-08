module.exports = function getUsaStockMoreInfoButtons(symbol) {
  return [
    [
      {
        text: 'Investopedia',
        url: `https://www.investopedia.com/markets/quote?tvwidgetsymbol=${symbol}`,
      },
    ],
    [
      {
        text: 'The Street',
        url: `https://www.thestreet.com/quote/${symbol}.html`,
      },
    ],
    [
      {
        text: 'The Wall Street Journal',
        url: `https://quotes.wsj.com/${symbol}`,
      },
    ],
  ];
};
