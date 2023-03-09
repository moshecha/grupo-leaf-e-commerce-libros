require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'Jeanjaures1',
    database: "leaf_db",
    host: "127.0.0.1",
    dialect: "mysql",
    
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD, //'Jeanjaures1',
    database: "leaf_db",
    host: "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT,
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
