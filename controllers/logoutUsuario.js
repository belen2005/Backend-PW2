import { ModeloUsuario } from "../database/models/modeloUsuario.js"

export const logoutUsuario = async (req, res, next)=>{
    const token = req.headers["authorization"]

    const usuario = await ModeloUsuario.findOne({session:token});
    if(usuario){
        usuario.session = null;
        await usuario.save();
        res.json({message:"Sesion cerrada con exito!"})
    }else{
        next(new Error("No se encontro el usuario"))
    }
}