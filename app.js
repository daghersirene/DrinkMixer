const express = require('express');
const mongoose = require('mongoose');
const DrinkMixer = require('./models/drinks');

mongoose.connect('mongodb://127.0.0.1:27017/drinkMixer');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/makedrink', async (req, res) => {
    const drink = new DrinkMixer({ name: 'Mojito', ingredients: 'Lime, Sugar, Mint, Rum', instructions: 'Muddle the mint, lime, and sugar. Add rum and ice. Shake and strain into a glass. Top with soda water.', image: 'https://www.thecocktaildb.com/images/media/drink/3z6xdi1589574607.jpg' });
    await drink.save();
    res.send(drink);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});