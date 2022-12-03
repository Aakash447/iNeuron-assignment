const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/allUsers", AuthController.allUsers);
router.get("/deleteUser/:userID", AuthController.deleteUser);

module.exports = router;
