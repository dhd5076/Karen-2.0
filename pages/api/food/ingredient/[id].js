import dbConnect from '../../../../utils/dbConnect'
import Ingredient from '../../../../models/Ingredient'

export default async function handler(req, res) {
    await dbConnect();
    return new Promise((resolve, reject) => {
        switch(req.method) {
            case "GET":
                Ingredient.findOne({_id: req.query.id})
                .then((ingredient) => {
                    if(!ingredient) {
                        reject(new Error("Ingredient Not Found"));
                    } else {
                        res.send(JSON.stringify(ingredient));
                        resolve();
                    }
                })
                .catch((error) => {
                    res.json(error);
                    reject(error);
                })
                break;
            case "DELETE":  
                Ingredient.deleteOne({_id: req.query.id})
                .then(() => {
                    //TODO Code for checking to make sure a document with given ID exists and else return 404
                    res.send();
                    resolve();
                })
                .catch((error) => {
                    res.json(error)
                    reject();
                })
                break;
        }
    });
}