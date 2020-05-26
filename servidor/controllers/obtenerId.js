const connection = require('../config/connection');

const obtenerId = (req, res) => {
    let id = req.params.id
    let sql = `SELECT * FROM competencias WHERE id = ${id}`;

    connection.query(sql, (error, resultado) => {
        if (error) {
            return res.status(404).send("No se encontraron competencias con ese id");
        };
        res.send(JSON.stringify(resultado));
    });

};

module.exports = {
    obtenerId
};