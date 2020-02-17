module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      database: "SDC"
    },
    seeds: {
      directory: __dirname + "/database/mysql/seeds"
    }
  },
};