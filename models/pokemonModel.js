// models/pokemonModel.js
const pokemons = [
    { id: 1, name: 'Bulbassauro', tipo: 'Vegetal/Veneno', altura: 0.7, peso: 6.9, nivelDePoder: 45 },
    { id: 2, name: 'Squirtle', tipo: 'Água', altura: 0.5, peso: 9.0, nivelDePoder: 44 },
    { id: 3, name: 'Charmander', tipo: 'Fogo', altura: 0.6, peso: 8.5, nivelDePoder: 39 },
];

const getPokemons = () => pokemons;
const getPokemonById = (id) => pokemons.find(p => p.id === parseInt(id));

// Adiciona um novo Pokémon
const createPokemon = (name, tipo, altura, peso, nivelDePoder) => {
    const newPokemon = {
        id: pokemons.length + 1,
        name,
        tipo,
        altura: parseFloat(altura), // Converte para número
        peso: parseFloat(peso),
        nivelDePoder: parseInt(nivelDePoder)
    };
    pokemons.push(newPokemon);
};

module.exports = { getPokemons, getPokemonById, createPokemon };
