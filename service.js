/**
 * Python script child process
 */
const { spawn } = require('child_process');
const childPython = spawn('python', ['python/script.py']);
childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
});

childPython.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

childPython.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

/**
 * Server
 */
const fs = require("fs"); 
const express = require('express');
const createServer = require('./server/index');

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
app.get('/js/', (req, res) => {
    res.sendFile(file);
});

createServer(app);