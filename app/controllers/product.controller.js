const db = require("../models");
const Products = db.product;

exports.productCreate = (req, res) => {
  // Save Products to Database
  Products.create({
    name: req.body.name,
    price: req.body.price,
  })
    .then(() => {
      res.send({ message: "Add Products Success" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.productGet = async (req, res) => {
  await Products.findAll()
    .then((data) => {
      return res.json({ data }).end();
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Products.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.send({ message: "Product success update!" });
      } else {
        res.send({
          message: `Cannot delete Product with id=${id}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .res.send({ message: "Could not delete Product with id=" + id });
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Products.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot update Product with id=${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id,
      });
    });
};
