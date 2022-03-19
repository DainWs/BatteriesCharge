const DBHelper = require('./utils/DBHelper');
const sql = require('./sqlMap');

const api = {};

// aumentar Battery
api.addBattery = function(req, res) {
    let params = req.body;
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
    var conn = new DBHelper().getConn();
    conn.query(sql.completeQuery, [], (err, result) => {
        if (err) return res.status(300).json(err);
        var parsedData = new Map();
        Array.from(result).forEach((tuple) => {
            let battery = null;
            if (parsedData.has(tuple.ID)) {
                battery = parsedData.get(tuple.ID);
                battery.entries.push({id: tuple.ENTRY_ID, batteriesId: tuple.BATTERIES_ID, voltage: tuple.VOLTAGE, fecha: tuple.FECHA});
            } else {
                battery = {id: tuple.ID, nombre: tuple.NOMBRE, inputPin: tuple.INPUTPIN, outputPin: tuple.OUTPUTPIN, entries: []};
                battery.entries.push({id: tuple.ENTRY_ID, batteriesId: tuple.BATTERIES_ID, voltage: tuple.VOLTAGE, fecha: tuple.FECHA});
            }
            parsedData.set(battery.id, battery);
        })
        res.status(200).json(Array.from(parsedData.values()));
    });
    conn.end();
};

// aumentar Battery entry
api.addBatteryEntry = function(req, res) {
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sql.batteriesEntries.add, 
        [params.id, params.batteryId, params.voltage, new Date(params.fecha)], 
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
        [req.body.id], 
        (err, result) => {
            return (err)
                ? res.status(300).json(err)
                : res.status(200).json(result);
        }
    );
    conn.end();
};

module.exports = api;