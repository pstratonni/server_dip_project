const authJwt = require("../middleware/auth.jwt");

module.exports = (app) => {
  const founds_pets = require("../controllers/founds_pets.controller");

  const router = require("express").Router();

  router.get("/", founds_pets.findAll);

  router.get("/:id", founds_pets.findOne);

//   router.put("/:id", [authJwt.verifyToken], founds_pets.update);

  router.delete(":id", [authJwt.verifyToken], founds_pets.delete);

  router.post("/", [authJwt.verifyToken], founds_pets.create);

  app.use("/api/founds_pets", router);
};
