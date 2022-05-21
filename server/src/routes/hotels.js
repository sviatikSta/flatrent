const express = require("express");
const router = express.Router();
const { hotels } = require("../controllers");

router.get("/getAllHotels", hotels.getAllHotels);
router.get("/searchByCity/:city", hotels.searchHotelByCity);
router.get("/searchByID/:id", hotels.searchHotelByID);
router.get("/getAllCities", hotels.getAllCities);

module.exports = router;