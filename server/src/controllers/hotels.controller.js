const Hotel = require('../model/Hotel');
const boom = require('boom');


exports.getAllHotels = async (req, res) => {
  try {
      const Hotels = await Hotel.find();
      return res.status(200).send(Hotels);
  } catch (err) {
      return res.status(400).send(boom.boomify(err));
  }
};

exports.searchHotelByCity = async (req, res) => {
  try {
    const Hotels = await Hotel.find({ city: { $eq: req.params.city } });
    console.log(req.headers);
    return res.status(200).send(Hotels);
  } catch (err) {
    return res.status(400).send(boom.boomify(err));
  }
};

exports.searchHotelByID = async (req, res) => {
  try {
    const Hotels = await Hotel.find({ _id: { $eq: req.params.id } });
    return res.status(200).send(Hotels);  
  } catch (err) {
    return res.status(400).send(boom.boomify(err));
  }
};

exports.getAllCities = async (req, res) => {
  try {
    const Cities = await Hotel.distinct("city");
    console.log(Cities)
    return res.status(200).send(Cities);  
  } catch (err) {
    return res.status(400).send(boom.boomify(err));
  }
};