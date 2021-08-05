const config = {
  dev: {
    DB_URI:
      "mongodb+srv://montaser:0kyjnaJVL9QZKOt0@cluster0.p4sqv.mongodb.net/foodCourt?retryWrites=true&w=majority",
    PORT: 8000,
  },

  prod: {
    DB_URI:
      "mongodb+srv://montaser:0kyjnaJVL9QZKOt0@cluster0.p4sqv.mongodb.net/foodCourt?retryWrites=true&w=majority",
    PORT: process.env.PORT,
  },
};

module.exports = config;
