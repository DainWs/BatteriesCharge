const fs = require("fs"); 
const express = require('express');
const createServer = require('./server/index');
const console = require("console");

let app = express();

app.use(express.static(__dirname + '/client/dist'));

app.get('/', (req, res) => {
    let file = '/index.html';
    if (fs.existsSync(file)) {
        res.sendFile(file);
    } else {
        res.send(__dirname + '<h1>Not found</h1><br/><p>Es posible que el servidor este cargando y compilando la pagina,<br/> vuelva a intentarlo en unos 5-10 segundos aproximados.</p>');   
    }
});

createServer(app);