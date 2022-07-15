const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'NONAME'
    },
    quantity: {
        type: Number,
        default: 0
    },
    unitType: {
        type: String,
        enum: ['G', 'ML', 'EACH'],
        default: 'G'
    },
    caseSize: {
        type: Number,
        default: 1
    },
    caseCost: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.models.Ingredient || mongoose.model('Ingredient', IngredientSchema);