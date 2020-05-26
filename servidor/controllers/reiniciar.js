const connection = require('../config/connection');

const reiniciarVotos = (req, res) => {
    let idCompetencia = req.params.idCompetencia;
    //Si la competencia no tiene votos retorna un error
    let sql = `SELECT * FROM votos WHERE competencia_id = ${idCompetencia}`;
    connection.query(sql, (error, resultado) => {
        if (resultado.length == 0) {
            return res.status(422).send("Esta competencia no tiene votos");
        } else if (error) {
            return res.status(404).send("Hubo un error");
        } //Si la competencia tiene votos elimina la referencias de la tbla votos
        let sqlDelete = `DELETE FROM votos WHERE competencia_id = ${idCompetencia}`;
        connection.query(sqlDelete, (error, resultado) => {
            if (error) {
                return res.status(404).send("Hubo un error");
            }
            return res.send(JSON.stringify(resultado));
        });
    });
};

module.exports = {
    reiniciarVotos
};