const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  link: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  img: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  date: { type: Date, default: Date.now }
});

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;