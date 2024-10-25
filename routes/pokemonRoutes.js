// routes/pokemonRoutes.js
const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Rotas existentes
router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);

// Novas rotas para o formulário de cadastro de Pokémon
router.get('/create', pokemonController.showCreateForm);  // Exibir o formulário
router.post('/create', pokemonController.createPokemon);  // Processar o cadastro

module.exports = router;