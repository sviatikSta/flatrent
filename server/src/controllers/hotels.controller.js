const Hotel = require('../model/Hotel');
const boom = require('boom');


exports.getAllHotels = async (req, res) => {
  try {
      const items = await Hotel.find();
      return res.status(200).send(items);
  } catch (err) {
      return res.status(400).send(boom.boomify(err));
  }
};

exports.createNewHotel = async (req, res) => {
  const hotel = new Hotel({
    name: "123",
    city: "123",
    photo: "123",
  });
  let data = await hotel.save();
  res.status(201).json({ data });
}

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