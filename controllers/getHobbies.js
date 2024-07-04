import { ModeloHobbie } from "../database/models/ModeloHobbie.js";
import { formatearFiltrosDB } from "../utils/functions.js";

export const getHobbies = (req, res, next) => {
  const filtroTitulo = formatearFiltrosDB(req.query.titulo);
  const filtroDescripcion = formatearFiltrosDB(req.query.descripcion);

  const filtros = {};
  if (filtroTitulo) filtros.titulo = filtroTitulo;
  if (filtroDescripcion) filtros.descripcion = filtroDescripcion;

  ModeloHobbie.find(filtros)
    .then((data) => {
      console.log("get hobbies =>", data);
      if (data.length === 0) {
        res.json([]);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
