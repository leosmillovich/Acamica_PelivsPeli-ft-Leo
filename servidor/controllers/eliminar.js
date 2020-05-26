const connection = require('../config/connection');

const eliminar = (req, res) => {
    let idCompetencia = req.params.idCompetencia;

    let sqlVotos = `DELETE FROM votos WHERE competencia_id = ${idCompetencia}`;
    let sqlCompetencia = `DELETE FROM competencias WHERE id = ${idCompetencia}`;

    connection.query(sqlVotos, (error, resultado) => {
        if (error) {
            return res.status(404).send("Hubo un error al eliminar los votos");
        };
        connection.query(sqlCompetencia, (error, resultado) => {
            if (error) {
                return res.status(404).send("Hubo un error al eliminar la competencia");
            };
            res.send(JSON.stringify(resultado));
        });
    });
};

module.exports = {
    eliminar
};