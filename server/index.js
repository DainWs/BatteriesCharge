// servidor backend de nodo
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');
const Api = require('./src/Api');
const DBHelper = require('./src/utils/DBHelper');

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: false
}));

// enrutamiento api back-end
app.use('/api', Api);

// empieza a escuchar
server.listen(8080, () => {
    console.log(' success!! port:8080')
})