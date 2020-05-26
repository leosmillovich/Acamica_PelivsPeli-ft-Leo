const connection = require('../config/connection');

const actores = (req, res) => {
    let sql = `SELECT * FROM actor`;
    connection.query(sql, (error, resultados) => {
        if(error){
            return res.status(404).send("No se obtuvieron datos");
        }
        res.send(JSON.stringify(resultados));
    });
};

module.exports = {
    actores
};