const { products } = require("../middleware");
const { authJwt } = require("../middleware");
const controller = require("../controllers/product.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/product/create",
    [products.verifyToken, authJwt.isAdmin],
    controller.productCreate
  );

  app.get("/api/product/get", [authJwt.verifyToken, authJwt.isAdmin], controller.productGet);
  app.put('/api/product/update/:id', [authJwt.verifyToken, authJwt.isAdmin, controller.update])
  app.delete('/api/product/delete/:id', [authJwt.verifyToken, authJwt.isAdmin, controller.delete]);
};
