const express = require("express");
const router = express.Router();
const authConfig = require("../middlewares/auth");
const { auth } = require("../controllers");

router.post("/getAllHotels", hotels.getAllHotels);
router.post("/search", hotels.searchHotel);

module.exports = router;