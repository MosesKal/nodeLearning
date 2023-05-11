// const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));
// console.log(path.join("folder1", "folder2", "index.js"));

// const greeting = (name) => {
//   console.log(`Hello ${name}`);
// };

// const greetingMoses = (greetingFn) => {
//   const name = "MosesDev";
//   greetingFn(name);
// };

// greetingMoses(greeting);

const EventEmetter = require("node:events");

const emitter = new EventEmetter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received!, Baking a ${size} pizza ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complementary drink!");
  }
});

emitter.emit("order-pizza", "large", "mushroom");
