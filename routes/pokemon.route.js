const express = require('express');
const router = express.Router();

const db = require('../db/models/index');

// GET
router.get("/", async (req, res, next) => {
    try {
        const pokemons = await db.Pokemon.findAll();
        res.json(pokemons);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const pokemons = await db.Pokemon.findByPk(req.params.id);
        res.json(pokemons);
    } catch (error) {
        next(error);
    }
});

// POST
router.post("/", async (req, res, next) => {
    try {
        const pokemon = req.body;

        const newPokemon = await db.Pokemon.create(pokemon);
        res.status(201).json(newPokemon);
    } catch (error) {
        next(error);
    }
});


module.exports = router;