const express = require("express");
const morgan = require("morgan");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const { success, getUniqueId } = require("./helper");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello, express!"));
app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  const message = "un pokemon a bien ete trouve.";
  res.json(success(message, pokemon));
});

app.get("/api/pokemons", (req, res) => {
  const message = "La liste des pokemons a bien ete recuperee";
  res.json(success(message, pokemons));
});

app.post("/api/pokemons", (req, res) => {
  const id = getUniqueId(pokemons);
  const pokemonCreated = { ...req.body, ...{ id: id, created: new Date() } };
  pokemons.push(pokemonCreated);
  const message = `Le pokemon ${pokemonCreated}`;
  res.json(success(message, pokemonCreated));
});

app.put("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonUpated = { ...req.body, id: id };

  pokemons = pokemons.map((pokemon) => {
    return pokemon.id === id ? pokemonUpated : pokemon;
  });
  const message = `Le pokemon ${pokemonUpated.name} a bien ete modifie`;
  res.json(success(message, pokemonUpated));
});

app.delete("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemonDeleted = pokemons.find((pokemon) => pokemon.id === id);

  pokemons.filter((pokemon) => pokemon.id !== id);
  const message = `Le pokemon ${pokemonDeleted.name} a bien ete supprime`;
  res.json(success(message, pokemonDeleted));
});

app.listen(port, () =>
  console.log(
    `notre application node est lancee sur : http://localhost:${port}`
  )
);
