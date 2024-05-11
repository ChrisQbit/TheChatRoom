const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const userController = require("../controllers/userController");

router.post("/login", catchErrors(userController.login));
router.post("/search", catchErrors(userController.search));
router.post("/register", catchErrors(userController.register));

module.exports = router;
