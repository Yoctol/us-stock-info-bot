const axios = require('axios');

module.exports = async function searchStock(context) {
  try {
    const { data } = await axios.get(
      `https://autoc.finance.yahoo.com/autoc?query=${context.event.text}&region=1&lang=en`
    );
    const result = data.ResultSet.Result;
    if (result.length === 0) {
      return null;
    }

    const { symbol, name, typeDisp: type } = result[0];

    return { symbol, name, type };
  } catch (error) {
    console.log(error);
  }
};
