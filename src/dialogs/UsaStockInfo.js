const getGlobalMarketInfo = require('../utils/getGlobalMarketInfo');
const getUsaStockMoreInfoButtons = require('../utils/getUsaStockMoreInfoButtons');
const getUsaEtfMoreInfoButtons = require('../utils/getUsaEtfMoreInfoButtons');
const searchStock = require('../utils/searchStock');

module.exports = async function UsaStockInfo(context) {
  const stock = await searchStock(context);
  if (!stock) return;

  const { currentPrice, previousClose, error } = await getGlobalMarketInfo(
    stock.symbol
  );

  if (error) {
    if (process.env.NODE_ENV === 'development') {
      await context.sendText(error);
    }
    return;
  }

  let symbolMoreInfoButtons = [];
  if (stock.type === 'Equity') {
    symbolMoreInfoButtons = getUsaStockMoreInfoButtons(stock.symbol);
  } else if (stock.type === 'ETF') {
    symbolMoreInfoButtons = getUsaEtfMoreInfoButtons(stock.symbol);
  } else {
    return;
  }

  const change = currentPrice - previousClose;
  const sign = change > 0 ? '+' : '';

  await context.sendText(
    `${stock.symbol.toUpperCase()}\n${stock.name}\n\nCurrent Price: ${Number(
      currentPrice
    ).toFixed(2)}\nDay Gain: ${sign}${change.toFixed(2)} (${sign}${(
      (change / previousClose) *
      100
    ).toFixed(2)}%)`,
    {
      reply_markup: {
        inline_keyboard: symbolMoreInfoButtons,
      },
    }
  );
};
