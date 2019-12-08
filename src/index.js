const { router, text } = require('bottender/router');

const Greeting = require('./dialogs/Greeting');
const UsaStockInfo = require('./dialogs/UsaStockInfo');

module.exports = async function App() {
  return router([
    text('/start', Greeting),
    text('/help', Greeting),
    text(/^[\w\s.]+$/, UsaStockInfo),
  ]);
};
