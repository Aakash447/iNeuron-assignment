const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/allUsers", AuthController.allUsers);
router.delete("/deleteUser/:userID", AuthController.deleteUser);
router.patch("/updateUser/:userID", AuthController.updateUser);

module.exports = router;
