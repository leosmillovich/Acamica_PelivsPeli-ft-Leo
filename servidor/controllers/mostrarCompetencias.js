const connection = require('../config/connection');

const mostrarCompetencias = (req, res) => {
    let sql = `SELECT * FROM competencias`;

    connection.query(sql, (error, resultados) => {
        if (error) {
            return res.status(404).send("Hubo un error en la consulta");
        };
        res.send(JSON.stringify(resultados));
    });
};

module.exports = {
    mostrarCompetencias
};