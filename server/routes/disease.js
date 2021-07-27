const express = require('express');
const { getDiseases, getDisease, createDisease, updateDisease, deleteDisease } = require('../controllers/disease');

const router = express.Router();

// get route
router.get('/diseases', (req, res) => getDiseases(req, res));

//create route
router.post('/disease', (req, res) => createDisease(req, res));

//read route
router.get('/diseases/:dId', (req, res) => getDisease(req, res));

//update route
router.put('/disease/:dId', (req, res) => updateDisease(req, res));

//delete route
router.delete('/disease/delete/:dId', (req, res) => deleteDisease(req, res));

module.exports = router;
