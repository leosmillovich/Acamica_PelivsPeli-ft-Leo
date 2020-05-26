const connection = require('../config/connection');

const directores = (req, res) => {
    let sql = `SELECT * FROM director`;
    connection.query(sql, (error, resultados) => {
        if(error){
            return res.status(404).send("No se obtuvieron datos");
        }
        res.send(JSON.stringify(resultados));
    });
};

module.exports = {
    directores
};