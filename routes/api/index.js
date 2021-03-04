const router = require("express").Router();
const projectsRoutes = require("./projects");

// project routes
router.use("/projects", projectsRoutes);

module.exports = router;
