// servidor backend de nodo
const http = require('http');
const bodyParser = require('body-parser');
const Api = require('./src/Api');
const DBHelper = require('./src/utils/DBHelper');
const { Server } = require("socket.io");
const ClientsObserver = require('./src/domain/ClientsObserver');

var conn = new DBHelper().getConn();
var io = null;

function createServer(app, onStartCallback = () => {}) {
    let server = http.createServer(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    
    // enrutamiento api back-end
    app.post('/api/update', Api.update);
    app.post('/api/addBattery', Api.addBattery);
    app.post('/api/addBattery', Api.addBattery);
    app.get('/api/getBattery', Api.getBattery);
    app.get('/api/getBatteries', Api.getBatteries);

    io = new Server(server);
    io.on('connection', onConnect);

    // empieza a escuchar
    server.listen(8080, () => {
        console.log(' success!! port:8080');
        onStartCallback();
    });

    return server;
};

function onConnect(socket) {
    ClientsObserver.subscribe(socket);

    socket.on('disconnect', function() {
        ClientsObserver.unsubscribe(socket);
    });
}

module.exports = createServer;