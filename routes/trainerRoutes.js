// routes/trainerRoutes.js
const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

// Rota para listar treinadores
router.get('/trainers', trainerController.listTrainers);

// Rota para exibir o formulário de cadastro
router.get('/trainer/create', trainerController.showCreateForm);

// Rota para criar um treinador
router.post('/trainer/create', trainerController.createTrainer);

module.exports = router;
