// models/trainerModel.js
const { getPokemons } = require('./pokemonModel');

class Trainer {
    constructor(id, name, pokemons) {
        this.id = id;
        this.name = name;
        this.pokemons = pokemons || [];
    }
}

let trainers = []; // Lista para armazenar os treinadores

module.exports = { Trainer, trainers };
