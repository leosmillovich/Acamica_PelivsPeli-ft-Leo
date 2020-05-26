const connection = require('../config/connection');

const obtenerDosPeliculas = (req, res) => {

    let id = req.params.id;
    //hago una consulta para obtener los datos con el id de la competencia
    let sql = `SELECT nombre, genero_id, director_id, actor_id FROM competencias WHERE id = ${id};`

    connection.query(sql, function (error, resultado) {
        if (error) {
            return res.status(500).send("Hubo un error en la consulta");
        }
        //obtengo los id de genero, director y actor
        let genero_id = resultado[0].genero_id;
        let director_id = resultado[0].director_id;
        let actor_id = resultado[0].actor_id;
        //hago una consulta para obtener dos distintos
        let sql = `SELECT DISTINCT p.titulo, p.id, p.poster, p.genero_id FROM pelicula p LEFT JOIN actor_pelicula ap ON p.id = ap.pelicula_id LEFT JOIN director_pelicula dp ON p.id = dp.pelicula_id WHERE 1 = 1`;
        //obtengo filtros segun hayan sido pedidos o no
        let genero = !genero_id ? " " : ` AND p.genero_id = ${genero_id}`;
        let director = !director_id ? " " : ` AND dp.director_id = ${director_id}`;
        let pelicula = !actor_id ? " " : `AND ap.actor_id = ${actor_id}`;
        let orderLimitSql = ` ORDER BY rand() limit 2;`
        //elaboro la consulta final
        let mysql = sql + genero + director + pelicula + orderLimitSql;

        connection.query(mysql, function (error, peliculas) {
            if (error) {
                return res.status(404).send("Hubo un error en la consulta");
            };
            let respuesta = {
                'peliculas': peliculas,
                'competencia': resultado[0].nombre
            };
            res.send(JSON.stringify(respuesta));
        });
    });
};

module.exports = {
    obtenerDosPeliculas
};
