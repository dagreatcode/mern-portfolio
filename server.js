require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes/api");
const path = require("path");

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("client/build"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern-portfolio",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/api/projects", (req, res) => {
  db.Projects.find({})
    .then((dbProject) => {
      res.json(dbProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.post("/contact", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(
    `🌎  ==> API Server now listening on PORT ${PORT} on http://localhost:${PORT}`
  );
});
