import { ModeloHobbie } from "../database/models/ModeloHobbie.js";

export const putHobbie = (req, res, next) => {
  const idHobbie = req.params.id;
  const { titulo, descripcion, beneficios } = req.body;
  const datosNuevos = {};
  if (titulo) datosNuevos.titulo = titulo;
  if (descripcion) datosNuevos.descripcion = descripcion;
  if (beneficios) datosNuevos.beneficios = beneficios;

  ModeloHobbie.updateOne({ id: idHobbie }, datosNuevos)
    .then((data) => {
      if (data.matchedCount === 0) {
        throw new Error(`No exite hobby con el ID ${idHobbie}`);
      }
      res.json({
        message: `Hobby con id ${idHobbie} modificado con exito`,
      });
    })
    .catch((error) => {
      next(error);
    });
};
