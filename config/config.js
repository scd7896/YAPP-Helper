module.exports = {
	development: {
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE,
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE,
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE,
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
  }
}