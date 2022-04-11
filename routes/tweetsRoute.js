const express = require("express");
router = express.Router();
tweetsRoute = require("../controllers/tweetsControllers");

router.get("/", tweetsRoute.tweetsController);

module.exports = router;
