const db = require("../models");
const FoundPets = db.founds_pets;

exports.create = (req, res) => {
  FoundPets.create({
    ...req.body,
  })
    .then((f_pets) => {
      res.send(f_pets);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  FoundPets.findAll()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving f_petss",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  FoundPets.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `FoundPets with id=${id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving FoundPets with id = " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  FoundPets.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "FoundPets was successfully deleted" });
      } else {
        res.send({
          message: `Cannot delete FoundPets with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error deleting FoundPets with id = " + id,
      });
    });
};
// exports.update = (req, res) => {
//   const id = req.params.id;
//   FoundPets.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         FoundPets.findByPk(id)
//           .then((data) => {
//             if (!data) {
//               res.status(404).send({
//                 message: `FoundPets with id=${id} not found`,
//               });
//             }
//             res.send(data);
//           })
//           .catch((err) => {
//             res.status(500).send({
//               message: err.message || "Error retrieving FoundPets with id = " + id,
//             });
//           });
//       } else {
//         res.status(404).send({
//           message: `Cannot update FoundPets info with id=${id}.`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Error updating FoundPets info with id = " + id,
//       });
//     });
// };



// exports.findAllByPersonId = (req, res) => {
//   const personId = req.params.id;

//   FoundPets.findAll({ where: { person_id: personId } })
//     .then((data) => res.send(data))
//     .catch((err) => {
//       res
//         .status(500)
//         .send({ message: err.message || "Some error occured while searching" });
//     });
// };