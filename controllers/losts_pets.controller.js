const db = require("../models");
const LostPets = db.losts_pets;

exports.create = (req, res) => {
  LostPets.create({
    ...req.body,
  })
    .then((l_pets) => {
      res.send(l_pets);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  LostPets.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving l_petss",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  LostPets.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `LostPets with id=${id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving LostPets with id = " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  LostPets.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "LostPets was successfully deleted" });
      } else {
        res.send({
          message: `Cannot delete LostPets with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error deleting LostPets with id = " + id,
      });
    });
};