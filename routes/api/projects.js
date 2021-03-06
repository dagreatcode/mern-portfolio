const router = require("express").Router();
const projectsController = require("../../controllers/projectsControllers");
const db = require("../models");

router.get("/projects", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  db.Projects.find({
    name: { }
  })
    .then(projects => res.json(projects))
    .catch(err => res.status(422).end());
});
// router.use("/projects", projectRoutes);
// Matches with "/api/projects"
router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

module.exports = router;
