const express = require("express");
const { success } = require("./helper");
let pokemons = require("./mock-pokemon");

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`URL : ${req.url}`);
  next();
};

app.use(logger);

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
