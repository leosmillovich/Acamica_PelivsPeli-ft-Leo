const connection = require('../config/connection');

const editar = (req, res) => {
    let idCompetencia = req.params.idCompetencia;
    let nombreNuevo = req.body.nombre;
    let sql = `UPDATE competencias SET nombre = '${nombreNuevo}' WHERE id = ${idCompetencia}`;

    connection.query(sql, (error, resultado) => {
        if(error){
            return res.status(422).send("Probar con otro nombre, esa competencia ya existe!");
        };
        res.send(JSON.stringify(resultado));
    });
};

module.exports = {
    editar
};