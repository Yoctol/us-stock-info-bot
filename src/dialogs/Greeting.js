module.exports = async function Greeting(context) {
  await context.sendText(
    'I am stock info bot. Simply type stock symbol to query.'
  );
};
