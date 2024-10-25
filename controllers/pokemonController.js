// controllers/pokemonController.js
const pokemonModel = require('../models/pokemonModel');

// Rotas existentes
const getAllPokemons = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('index', { pokemons });
};

const getPokemon = (req, res) => {
    const pokemon = pokemonModel.getPokemonById(req.params.id);
    if (pokemon) {
        res.render('pokemon', { pokemon });
    } else {
        res.status(404).send('Pokémon não encontrado');
    }
};

// Novos métodos para o formulário de cadastro
const showCreateForm = (req, res) => {
    res.render('create'); // Renderiza a página de formulário
};

const createPokemon = (req, res) => {
    const { nome, tipo, altura, peso, nivelDePoder } = req.body;
    pokemonModel.createPokemon(nome, tipo, altura, peso, nivelDePoder); // Adiciona o Pokémon ao array
    res.redirect('/'); // Redireciona para a página inicial após o cadastro
};

module.exports = { getAllPokemons, getPokemon, showCreateForm, createPokemon };
