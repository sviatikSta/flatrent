const express = require("express");
const router = express.Router();
const { hotels } = require("../controllers");

router.get("/getAllHotels", hotels.getAllHotels);
router.get("/search", hotels.searchHotel);
router.get("/create", hotels.createNewHotel);

module.exports = router;