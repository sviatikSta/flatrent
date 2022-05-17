const express = require("express");
const router = express.Router();
const authConfig = require("../middlewares/auth");
const { auth } = require("../controllers");

router.post("/allHotels", hotels.getAll);
router.post("/search", hotels.get);

module.exports = router;