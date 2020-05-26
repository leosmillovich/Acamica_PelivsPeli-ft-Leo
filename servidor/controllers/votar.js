const connection = require('../config/connection');

const votar = (req, res) => {
    let idCompetencia = req.params.idCompetencia;
    let idPelicula = req.body.idPelicula;

    let sql = `INSERT INTO votos (pelicula_id, competencia_id) VALUES (${idPelicula}, ${idCompetencia})`;

    connection.query(sql, (error, respuesta) => {
        if(error){
            return res.status(500).send("No se pude insertar el voto");
        }
        res.send(JSON.stringify(respuesta));
    });

};

module.exports = {
    votar
};