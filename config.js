const config = {
  dev: {
    DB_URI: "mongodb://localhost:27017/foodCourt",
    PORT: process.env.PORT || 8000,
  },

  prod: {},
};

module.exports = config;
