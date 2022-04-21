const { NODE_ENV } = process.env;

console.log(NODE_ENV)
const environments = {
  dev: {
    port: 5000,
    name: 'development',
    mysqlConfig: {
      host: process.env.MYSQL_HOST_DEV,
      user: process.env.MYSQL_USER_DEV,
      password: process.env.MYSQL_PASSWORD_DEV,
      database: process.env.MYSQL_DATABASE_DEV,
      timezone: 'utc',
      port: 3306,
    }
  },
  prod: {
    port: 5000,
    name: 'production',
    mysqlConfig: {
      host: process.env.MYSQL_HOST_PROD,
      user: process.env.MYSQL_USER_PROD,
      password: process.env.MYSQL_PASSWORD_PROD,
      database: process.env.MYSQL_DATABASE_PROD,
      timezone: 'utc',
      port: 3306,
    }
  }
} 

let config = environments.dev;

switch(NODE_ENV) {
  case 'production': config = environments.prod;
    break;
  default: config = environments.dev;
}


export default Object.freeze(config);