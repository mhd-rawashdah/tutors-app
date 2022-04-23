import config from "../../config.js";
import mysql from 'mysql2/promise';

class DatabaseUtil {

    constructor() {}

    async initialize () {
        const { host, port, user, password, database } = config.mysqlConfig;
        const connection = await mysql.createConnection({ host, port, user, password });
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\` CHARACTER SET utf8 COLLATE utf8_general_ci;`);
    }
}


export default new DatabaseUtil();