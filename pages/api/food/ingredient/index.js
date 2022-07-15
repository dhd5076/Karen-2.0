import dbConnect from '../../../../utils/dbConnect'
import Ingredient from '../../../../models/Ingredient'

export default async function handler(req, res) {
    await dbConnect();
    switch(req.method) {
        case "GET":
            Ingredient.find({})
            .then((ingredients) => {
                res.send(JSON.stringify(ingredients));
            })
            .catch((error) => {
                res.send({error: error.message});
            })
            break;
        case "POST":  
            console.log("POST")  
            const ingredient = new Ingredient({
                name: req.body.name
            })
            await ingredient.save();
            res.send();
            break;
    }
}