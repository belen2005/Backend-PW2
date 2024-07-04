import { ModeloHobbie } from "../database/models/ModeloHobbie.js";
import { obtenerProximoId } from "../utils/functions.js";

export const postHobbie = async (req, res, next) => {
  const { titulo, descripcion, beneficios, equipo_necesario, como_empezar } =
    req.body;
  const nuevoHobbie = new ModeloHobbie();
  nuevoHobbie.id = await obtenerProximoId(ModeloHobbie);
  nuevoHobbie.titulo = titulo;
  nuevoHobbie.descripcion = descripcion;
  nuevoHobbie.beneficios = beneficios;
  nuevoHobbie.equipo_necesario = equipo_necesario;
  nuevoHobbie.como_empezar = como_empezar;



  nuevoHobbie
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      next(error);
    });
};
