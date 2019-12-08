module.exports = function getUsaEtfMoreInfoButtons(symbol) {
  return [
    [
      {
        text: 'ETF Database',
        url: `https://etfdb.com/etf/${symbol}`,
      },
    ],
    [
      {
        text: 'ETF Daily News',
        url: `https://etfdailynews.com/etf/${symbol}`,
      },
    ],
    [
      {
        text: 'ETF.com',
        url: `https://www.etf.com/${symbol}`,
      },
    ],
  ];
};
