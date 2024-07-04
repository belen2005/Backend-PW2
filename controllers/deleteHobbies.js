import { ModeloHobbie } from "../database/models/ModeloHobbie.js";

export const deleteHobbies= (req, res, next)=>{
const idHobbie = req.params.id;
    ModeloHobbie.deleteOne({id: idHobbie})
    .then((data)=>{
        if(data.deletedCount !== 1){
            throw new Error(`No existe ningun hobby con el id ${idHobbie}`)
        }else{
            res.json({
                message: `Hobbie con id ${idHobbie} eliminado con exito`
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}

