/**
 * Downs Bot Server
 */
const fs = require("fs"); 
const express = require('express');
const createServer = require('downs-server');
const app = express();

app.use(express.static('public/'));
app.get('/', (req, res) => prepareFeatureResponse('/index.html', res) );
app.get('/batteries', (req, res) => prepareFeatureResponse('/batteries/index.html', res) );

function prepareFeatureResponse(file, response) {
    if (fs.existsSync(file)) {
        response.sendFile(file);
    } else {
        response.send('<h1>Not found</h1><br/><p>Es posible que el servidor este cargando y compilando la pagina,<br/> vuelva a intentarlo en unos 5-10 segundos aproximados.</p>');   
    }
}

app.get('/js/', (req, res) => {
    res.sendFile(file);
});

createServer(app, startPythonScript);

function startPythonScript() {
    /**
     * Python script child process
     */
    const { spawn } = require('child_process');
    const childPython = spawn('python', ['batteriescharge-python/script.py']);
    childPython.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`)
    });
    
    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });

    console.log(childPython.connected);
}