var mysql=require('mysql');
var util=require('util');
var dotenv=require('dotenv');
dotenv.config();

var pool=mysql.createPool(
    {
        
        host: process.env.MYSQL_HOST,
       port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
       password: process.env.MYSQL_PASSWORD,
       database: process.env.MYSQL_DB_NAME        
    }
)


pool.query=util.promisify(pool.query);

module.exports=pool;
