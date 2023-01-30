import mysql from "mysql2"
import * as dotenv from "dotenv";
dotenv.config()
const password = process.env.MY_SQL_PASSWORD;

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:password,
    database:"social"
})