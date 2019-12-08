const axios = require('axios');

module.exports = async function getGlobalMarketInfo(symbol) {
  try {
    const { data } = await axios.get(
      `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?interval=1m&range=1m`
    );

    if (data.chart.error) {
      return { error: data.chart.error.description };
    }

    const {
      regularMarketPrice: currentPrice,
      previousClose: previousClose,
    } = data.chart.result[0].meta;

    return {
      currentPrice,
      previousClose,
    };
  } catch (error) {
    console.log(error);
  }
};
