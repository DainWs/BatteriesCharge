// servidor backend de nodo
const http = require('http');
const bodyParser = require('body-parser');
const Api = require('./src/Api');
const { Server } = require("socket.io");
const ClientsObserver = require('./src/domain/ClientsObserver');
const FeaturesObserver = require('./src/domain/FeaturesObserver');
const PORT = process.env.PORT || 8080;

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
    app.get('/api/getBattery', Api.getBattery);
    app.get('/api/getBatteries', Api.getBatteries);

    io = new Server(server);
    io.on('connection', onConnect);
    
    // empieza a escuchar
    server.listen(PORT, () => {
        console.log(`success!! port:${PORT}`);
        onStartCallback();
    });

    return server;
};

function onConnect(socket) {
    ClientsObserver.subscribe(socket);
    FeaturesObserver.subscribe(socket, FeaturesObserver.features.all);

    socket.on('disconnect', function() {
        ClientsObserver.unsubscribe(socket);
        FeaturesObserver.unsubscribe(socket, FeaturesObserver.features.all);
    });
}

module.exports = createServer;