const connection = require('../config/connection');

const crearCompetencia = (req, res) => {

    let nombre = req.body.nombre;//obtengo nombre competencia
    let genero_id = req.body.genero > 0 ? req.body.genero : null;//si el id del genero es mayor que cero asigno su valor y se no se le asigna null
    let director_id = req.body.director > 0 ? req.body.director : null;//si el id del director es mayor que cero asigno su valor y se no se le asigna null
    let actor_id = req.body.actor > 0 ? req.body.actor : null;//si el id del actor es mayor que cero asigno su valor y se no se le asigna null
    //Obtengo todas las peliculas unidas a sus actores y directores
    let sql = `SELECT * FROM pelicula p LEFT JOIN actor_pelicula ap ON p.id = ap.pelicula_id LEFT JOIN director_pelicula dp ON p.id = dp.pelicula_id WHERE 1 = 1`
    //aplico filtros para completar las consulta sql segun existan o no los datos
    let generoSql = genero_id == null ? " " : ` AND p.genero_id = ${genero_id}`
    let directorSql = director_id == null ? " " : ` AND dp.director_id = ${director_id}`
    let actorSql = actor_id == null ? " " : ` AND ap.actor_id = ${actor_id}`
    //consulta final
    let mysql = sql + generoSql + directorSql + actorSql;

    connection.query(mysql, function (error, resultado) {
        if (resultado == null || resultado.length < 2) {//Si no existen mas de dos peliculas se retorna el error
            return res.status(422).send("No existen dos peliculas que cumplan con todos los filtros");
        } else {//si existen procedo con el insert
            let sql = `INSERT INTO competencias(nombre, genero_id, director_id, actor_id) VALUES ('${nombre}', ${genero_id}, ${director_id}, ${actor_id})`;
            console.log(sql);
            connection.query(sql, function (error, resultado) {
                if (error) {
                    return res.status(500).send("Hubo un error en la creacion de la nueva competencia");
                };
                res.send(JSON.stringify(resultado));
            });
        }
    });

};

module.exports = {
    crearCompetencia
};