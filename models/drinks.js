const moongose = require('mongoose');
const Schema = moongose.Schema;

const drinkMixerSchema = new Schema({
    name: String,
    ingredients: String,
    instructions: String,
    image: String
});

module.exports = moongose.model('DrinkMixer', drinkMixerSchema);