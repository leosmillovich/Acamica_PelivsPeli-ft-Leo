const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes =require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

routes(app);

const port = 8080;
const host = 'localhost';

app.listen(port, host, () => {
    console.log(`Servidor corriendo en http://${host}:${port}`);
});