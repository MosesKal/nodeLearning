const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello, express!"));
app.get("/api/pokemons/:id/:name", (req, res) => {
  const id = req.params.id;
  const name = req.params.name;
  res.send(`Vous avez demandé le pokemon numéro : ${id} est ${name}`);
});

app.listen(port, () =>
  console.log(
    `notre application node est lancee sur : http://localhost:${port}`
  )
);
