module.exports = {
  session: {
    driver: process.env.NODE_ENV === 'production' ? 'mongo' : 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },
      mongo: {
        url:
          process.env.MONGODB_URI ||
          'mongodb://localhost:27017/us-stock-info-bot',
        collectionName: 'sessions',
      },
    },
  },
  initialState: {},
  channels: {
    telegram: {
      enabled: true,
      path: '/webhooks/telegram',
      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,
    },
  },
};
