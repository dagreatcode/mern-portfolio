const mongoose = require("mongoose");
const db = require("../models");
// const image = require("../client/src/containers/Portfolio/img")

// This file empties the projects collection and inserts the projects below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-portfolio"
);

const projectSeed = [
  {
    name: "Book Save",
    link: "https://vince-books.herokuapp.com/",
    image: "img/p1.png",
    date: new Date(Date.now()),
  },
  {
    name: "Shop",
    link: "https://dagreatcode.github.io/shop/",
    image: "img/p2.png",
    date: new Date(Date.now()),
  },
  {
    name: "RetroLuxe",
    link: "https://retroluxe.herokuapp.com/",
    image: "img/p3.png",
    date: new Date(Date.now()),
  },
  {
    name: "GoodAutoDash",
    link: "https://dagreatcode.github.io/goodAutoDash/",
    image: "img/p4.png",
    date: new Date(Date.now()),
  },
  {
    name: "What's For Dinner",
    link: "https://dagreatcode.github.io/whats-for-dinner/",
    image: "img/p5.png",
    date: new Date(Date.now()),
  },
  {
    name: "Positive Thoughts",
    link: "http://www.positive-thoughts.org/",
    image: "img/p6.png",
    date: new Date(Date.now()),
  },
];

db.Projects.remove({})
  .then(() => db.Projects.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
