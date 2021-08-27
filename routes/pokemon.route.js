const express = require("express");
const router = express.Router();

const db = require("../db/models/index");

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
router.post("/create", async (req, res, next) => {
  try {
    const pokemon = req.body;

    const newPokemon = await db.Pokemon.create(pokemon);
    res.status(201).json(newPokemon);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
router.post("/update/:id", async (req, res, next) => {
  try {
    const pokemon = req.body;

    const [numberOfUpdatedRecords, updatedPokemons] = await db.Pokemon.update(pokemon, {
      where: {
        id: req.params.id
      },
      returning: true // This will return updated result
    });

    const returnObj = {
      message: `${numberOfUpdatedRecords} records updated.`,
      updatedPokemons
    };
    res.status(200).json(returnObj);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
