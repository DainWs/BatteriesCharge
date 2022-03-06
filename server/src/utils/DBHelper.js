const mysql = require('mysql');
class DBHelper{
    getConn(){
        let conn = mysql.createConnection({
            host:'127.0.0.1',
            port:'3306',
            user:'Batteries',
            password:'Batteries',
            database:'BATTERIES'
        });
        conn.connect();
        return conn;
    }
}
module.exports = DBHelper;