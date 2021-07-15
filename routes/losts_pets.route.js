const authJwt = require("../middleware/auth.jwt");

module.exports = (app) => {
  const losts_pets = require("../controllers/losts_pets.controller");

  const router = require("express").Router();

  router.get("/", losts_pets.findAll);

  router.get("/:id", losts_pets.findOne);

//   router.put("/:id", [authJwt.verifyToken], losts_pets.update);

  router.delete(":id", [authJwt.verifyToken], losts_pets.delete);

  router.post("/", [authJwt.verifyToken], losts_pets.create);

  app.use("/api/losts_pets", router);
};
