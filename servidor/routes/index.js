const competencias = require('../controllers/mostrarCompetencias');
const mostrarDosPeliculas = require('../controllers/obtenerDosPeliculas');
const votacion = require('../controllers/votar');
const resultados = require('../controllers/obtenerResultados');
const crear = require('../controllers/crearCompetencias');
const reiniciar = require('../controllers/reiniciar');
const generos = require('../controllers/generos');
const directores = require('../controllers/directores');
const actores = require('../controllers/actores');
const eliminar = require('../controllers/eliminar');
const id = require('../controllers/obtenerId');
const editar = require('../controllers/editar');


module.exports = (app) => {
    app.delete('/competencias/:idCompetencia/votos', reiniciar.reiniciarVotos);
    app.post('/competencias/:idCompetencia/voto', votacion.votar);
    app.get('/competencias/:id/resultados', resultados.obtenerResultados);
    app.get('/competencias/:id/peliculas', mostrarDosPeliculas.obtenerDosPeliculas);
    app.delete('/competencias/:idCompetencia', eliminar.eliminar);
    app.get('/competencias/:id', id.obtenerId);
    app.put('/competencias/:idCompetencia', editar.editar);
    app.post('/competencias', crear.crearCompetencia);
    app.get('/competencias', competencias.mostrarCompetencias);
    app.get('/generos', generos.generos);
    app.get('/directores', directores.directores);
    app.get('/actores', actores.actores);
};