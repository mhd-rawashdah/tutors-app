require('dotenv').config();

const { MYSQL_HOST_DEV, MYSQL_USER_DEV, MYSQL_PASSWORD_DEV, MYSQL_DATABASE_DEV } = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USER_DEV,
    "password": MYSQL_PASSWORD_DEV,
    "database": MYSQL_DATABASE_DEV,
    "host": MYSQL_HOST_DEV,
    "dialect": "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
