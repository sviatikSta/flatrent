const Hotels = require('../model/Hotel');

exports.getAllHotels = async (req, res) => {
    try {
        const items = await Hotels.find();
        return res.status(200).send(items);
    } catch (err) {
        return res.status(400).send(boom.boomify(err));
    }
};

exports.searchHotel = async (req, res) => {
  try {
    const Hotels = await Hotels.find({ city: { $eq: req.headers.city } });
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).send(boom.boomify(err));
  }
};