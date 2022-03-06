const express = require('express');
const router = express.Router();

const DBHelper = require('./utils/DBHelper');
const sql = require('./sqlMap');

// aumentar Battery
router.post('/addBattery', (req, res) => {
    let sqlStr = sql.batteries.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.id, params.name], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

// consulta al Battery
router.post('/getBattery', (req, res) => {
    let sqlStr = sql.batteries.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.id], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
    conn.end();
});

// consulta al Batteries
router.post('/getBatteries', (req, res) => {
    let sqlStr = sql.batteries.selectAll;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
    conn.end();
});

// aumentar Battery entry
router.post('/addBatteryEntry', (req, res) => {
    let sqlStr = sql.batteries.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.batteryId, params.id, params.voltage], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
    conn.end();
});

// consulta batteries entries list
router.post('/getBatteriesEntries', (req, res) => {
    let sqlStr = sql.batteriesEntries.select;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.batteryId], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
    conn.end();
});

module.exports = router;