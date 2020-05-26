const connection = require('../config/connection');

const obtenerResultados = (req, res) => {
    let id = req.params.id;

    let competencia = `SELECT nombre from competencias WHERE id = ${id}`;
    connection.query(competencia, (error, resultadoNombre) => {
        if (error) {
            return res.status(404).send("Competencia no encontrada");
        };
        let nombreComp = resultadoNombre;
        let sql = `SELECT p.id, p.poster, p.titulo, COUNT(p.id) AS votos FROM pelicula p 
            INNER JOIN votos v ON p.id = v.pelicula_id
            INNER JOIN competencias c ON c.id = v.competencia_id
            WHERE c.id = ${id}
            GROUP BY v.pelicula_id
            ORDER BY COUNT(p.id) DESC LIMIT 3;`
        connection.query(sql, (error, resultado) => {
            if (error) {
                return res.status(404).send("No se obtuvieron resultados");
            } else {
                let respuesta = {
                    'competencia': nombreComp[0].nombre,
                    'resultados': resultado
                };
                return res.send(JSON.stringify(respuesta));
            };
        });

    });
};

module.exports = {
    obtenerResultados
};