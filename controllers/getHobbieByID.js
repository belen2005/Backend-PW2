import { ModeloHobbie } from "../database/models/ModeloHobbie.js";

export const getHobbieById = (req, res, next) => {
  const idHobbie = req.params.id;
  ModeloHobbie.findOne({ id: idHobbie})
    .then((data) => {
      if (!data) {
        throw new Error(`No existe ningun hobby con el Id ${idHobbie}`);
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      next(error);
    });
};
