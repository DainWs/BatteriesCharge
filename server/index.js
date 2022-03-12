// servidor backend de nodo
const http = require('http');
const bodyParser = require('body-parser');
const Api = require('./src/Api');
const DBHelper = require('./src/utils/DBHelper');

let conn = new DBHelper().getConn();

function createServer(app) {
    let server = http.createServer(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    
    // enrutamiento api back-end
    app.get('/api/addBattery', Api.addBattery);
    app.get('/api/addBatteryEntry', Api.addBatteryEntry);
    app.post('/api/addBattery', Api.addBattery);
    app.post('/api/addBatteryEntry', Api.addBatteryEntry);
    
    app.get('/api/getBattery', Api.getBattery);
    app.get('/api/getBatteries', Api.getBatteries);
    app.get('/api/getBatteriesEntries', Api.getBatteriesEntries);
    
    // empieza a escuchar
    server.listen(8080, () => {
        console.log(' success!! port:8080')
    });
};

module.exports = createServer;