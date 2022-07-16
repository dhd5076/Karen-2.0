import dbConnect from '../../../../utils/dbConnect'
import Ingredient from '../../../../models/Ingredient'

export default async function handler(req, res) {
    await dbConnect();
    return new Promise((resolve, reject) => {
        console.log(req.method);
        switch(req.method) {
            case "GET":
                Ingredient.find({})
                .then((ingredients) => {
                    res.send(JSON.stringify(ingredients));
                    resolve();
                })
                .catch((error) => {
                    res.json(error);
                    reject(error);
                })
                break;
            case "POST":  
                console.log("POST")  
                const ingredient = new Ingredient({
                    name: req.body.name
                })
                ingredient.save()
                .then(() => {
                    res.json({error: null});
                })
                .catch((error) => {
                    res.json(error);
                })
                break;
        }
    });
}