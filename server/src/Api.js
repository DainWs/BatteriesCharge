const DBHelper = require('./utils/DBHelper');
const sql = require('./sqlMap');

const api = {};

// aumentar Battery
api.addBattery = function(req, res) {
    let conn = new DBHelper().getConn();
    conn.query(sql.batteries.add, 
        [params.id, params.name],
        (err, result) => {
            return (err)
                ? res.status(300).json(err)
                : res.status(200).json(result);
        }
    );
    conn.end();
};

// consulta al Battery
api.getBattery = function(req, res) {
    let conn = new DBHelper().getConn();
    conn.query(sql.batteries.select, [], (err, result) => {
        return (err)
            ? res.status(300).json(err)
            : res.status(200).json(result);
    });
    conn.end();
};

// consulta al Batteries
api.getBatteries = function(req, res) {
    let conn = new DBHelper().getConn();
    conn.query(sql.batteries.selectAll, [], (err, result) => {
        return (err)
            ? res.status(300).json(err)
            : res.status(200).json(result);
    });
    conn.end();
};

// aumentar Battery entry
api.addBatteryEntry = function(req, res) {
    let conn = new DBHelper().getConn();
    conn.query(sql.batteries.add, 
        [params.batteryId, params.id, params.voltage], 
        (err, result) => {
            return (err)
                ? res.status(300).json(err)
                : res.status(200).json(result);
        }
    );
    conn.end();
};

// consulta batteries entries list
api.getBatteriesEntries = function(req, res) {
    let conn = new DBHelper().getConn();
    conn.query(sql.batteriesEntries.select, 
        [req.body], 
        (err, result) => {
            return (err)
                ? res.status(300).json(err)
                : res.status(200).json(result);
        }
    );
    conn.end();
};

module.exports = api;