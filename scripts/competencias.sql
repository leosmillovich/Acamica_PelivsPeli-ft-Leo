DROP TABLE IF EXISTS competencias;
CREATE TABLE competencias (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
INSERT INTO competencias(nombre)
VALUES
  ("Cual es la mejor pelicula de accion?"),
  ("Cual es la mejor pelicula?"),
  ("Caul es la mas mala?");
-- se modifica la tabla competencias(nombre) para evitar competencias repetidas--
ALTER TABLE competencias
ADD
  UNIQUE INDEX nombre(nombre);
-- Se agrega FK genero id --
ALTER TABLE competencias
ADD
  COLUMN genero_id INT(11) UNSIGNED,
ADD
  FOREIGN KEY (genero_id) REFERENCES genero(id);
-- Se agrega FK director id --
ALTER TABLE competencias
ADD
  COLUMN director_id INT(11) UNSIGNED,
ADD
  FOREIGN KEY (director_id) REFERENCES director(id);
-- se agraga FK actores id --
ALTER TABLE competencias
ADD
  COLUMN actor_id INT(11) UNSIGNED,
ADD
  FOREIGN KEY (actor_id) REFERENCES actor(id);