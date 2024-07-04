import { Schema, model } from "mongoose";

const schemaHobbie = new Schema({
  id: { type: Number, unique: true },
  titulo: String,
  descripcion: String,
  equipo_necesario: String,
  como_empezar: String,
  beneficios: String,
});


export const ModeloHobbie = model("Hobbie", schemaHobbie)
