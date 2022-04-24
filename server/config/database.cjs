require('dotenv').config();

const { MYSQL_HOST_DEV, MYSQL_USER_DEV, MYSQL_PASSWORD_DEV, MYSQL_DATABASE_DEV,
  MYSQL_HOST_PROD, MYSQL_USER_PROD, MYSQL_PASSWORD_PROD, MYSQL_DATABASE_PROD} = process.env;

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
    "username": MYSQL_USER_PROD,
    "password": MYSQL_PASSWORD_PROD,
    "database": MYSQL_DATABASE_PROD,
    "host": MYSQL_HOST_PROD,
    "dialect": "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
