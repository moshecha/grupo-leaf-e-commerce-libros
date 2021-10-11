const { body } = require("express-validator");
module.exports = [body("name").notEmpty()
.withMessage("Campo obligatorio")
.isLength({
    min: 5,
    })
        .withMessage("Debes ingresar al menos 5 caracteres"),
];
