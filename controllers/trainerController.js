// controllers/trainerController.js
const { Trainer, trainers } = require('../models/trainerModel');
const { getPokemons } = require('../models/pokemonModel');

let trainerId = 1; // Incremento simples para ID de treinador

// Função para exibir a lista de treinadores
function listTrainers(req, res) {
    res.render('trainerIndex', { trainers });
}

// Função para renderizar o formulário de criação de treinador
function showCreateForm(req, res) {
    const pokemons = getPokemons(); // Pegar os Pokémons da model
    res.render('createTrainer', { pokemons });
}

// Função para criar um novo treinador
function createTrainer(req, res) {
    const { name, selectedPokemons } = req.body;
    const trainerPokemons = getPokemons().filter(pokemon => selectedPokemons.includes(pokemon.id.toString()));
    const newTrainer = new Trainer(trainerId++, name, trainerPokemons);
    trainers.push(newTrainer);
    res.redirect('/trainers');
}

module.exports = {
    listTrainers,
    showCreateForm,
    createTrainer
};
