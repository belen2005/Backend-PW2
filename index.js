import express from "express";
import "dotenv/config";
import cors from "cors";
import { conectarDB } from "./database/conexion.js";
import { getHobbies } from "./controllers/getHobbies.js";
import { getHobbieById } from "./controllers/getHobbieByID.js";
import { mostrarDatosRequest } from "./middlewares/mostrarDatosRequest.js";
import { manejadorErrores } from "./middlewares/manejadorErrores.js";
import { postHobbie } from "./controllers/postHobbie.js";
import { putHobbie } from "./controllers/putHobbie.js";
import { deleteHobbies } from "./controllers/deleteHobbies.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSesion.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
await conectarDB();

//middleware -> mostrar data requests
app.use(mostrarDatosRequest);

app.get("/", (req, res) => {
  res.send("Api Hobbies");
});

app.post("/registrar", postUsuario);
app.post("/login", loginUsuario);

app.use(controlarSesion);

app.post("/logout", logoutUsuario);

app.get("/hobbies", getHobbies);
app.get("/hobbie/:id", getHobbieById);
app.post("/hobbie", postHobbie);
app.put("/hobbie/:id", putHobbie);
app.delete("/hobbie/:id", deleteHobbies);

//middleware manejador de errores
app.use(manejadorErrores);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
