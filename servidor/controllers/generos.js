const connection = require('../config/connection');

const generos = (req, res) => {
    let sql = `SELECT * FROM genero`;
    connection.query(sql, (error, resultados) => {
        if(error){
            return res.status(404).send("No se obtuvieron datos");
        }
        res.send(JSON.stringify(resultados));
    });
};

module.exports = {
    generos
};