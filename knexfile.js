module.exports = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      database: "SDC"
    },
    migrations: {
      directory: __dirname + "/database/mysql/migrations"
    },
    seeds: {
      directory: __dirname + "/database/mysql/seeds"
    }
  },
};