const express = require("express");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello, express!"));
app.get("/api/pokemons/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  res.json(pokemon);
});
app.get("/api/pokemons", (req, res) => {
  const pokemonNb = pokemons.length;
  res.send(`Il ya ${pokemonNb} pokemons dans le pokedex, pour le moment`);
});

app.listen(port, () =>
  console.log(
    `notre application node est lancee sur : http://localhost:${port}`
  )
);
