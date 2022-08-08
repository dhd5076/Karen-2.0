const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'NONAME'
    },
    servings: {
        type: Number,
        default: 0
    },
    ingredients: [{
        ingredient: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Ingredient'
        },
        amount: {
            type: Number,
            default: 0
        }
    }]
});

module.exports = mongoose.model('Recipe', RecipeSchema)