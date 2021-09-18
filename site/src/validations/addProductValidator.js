const { body, check } = require("express-validator");

module.exports = [
  body("title").notEmpty().withMessage("Campo obligatorio"),
  body("isbn")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo números")
    .isISBN()
    .withMessage("ISBN inválido"),
  body("stock")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo números"),
  body("format").notEmpty().withMessage("Campo obligatorio"),
  body("category").notEmpty().withMessage("Campo obligatorio"),
  body("author").notEmpty().withMessage("Campo obligatorio"),
  body("editorial").notEmpty().withMessage("Campo obligatorio"),
  body("genre").notEmpty().withMessage("Campo obligatorio"),
  body("price")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo números"),
  body("pages")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo números"),
  body("stars")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isInt()
    .withMessage("Ingrese solo números")
    .isLength({ min: 1, max: 5 })
    .withMessage("Número entre 1 y 5"),
  body("slogan").notEmpty().withMessage("Campo obligatorio"),
  body("synopsis").notEmpty().withMessage("Campo obligatorio"),
  body("cover")
    .notEmpty()
    .withMessage('Campo obligatorio')
    .isInt({min:1,max:5}).withMessage('Número entre 1 y 5'),
  body('slogan').notEmpty().withMessage('Campo obligatorio'),
body('synopsis')
        .notEmpty()
        .withMessage('Campo obligatorio'),
];
