const express = require("express");
const morgan = require("morgan");
const { success } = require("./helper");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

app.use(morgan("dev"));

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

app.listen(port, () =>
  console.log(
    `notre application node est lancee sur : http://localhost:${port}`
  )
);
