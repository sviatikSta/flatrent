const User = require('../model/User');

exports.registerNewUser = async (req, res) => {
  try {
    let users_with_same_email = await User.find({ email: req.body.email });
    if (users_with_same_email.length >= 1) {
      return res.status(409).json({
        message: 'email already in use',
      });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    let data = await user.save();
    const token = await user.generateAuthToken(); // here it is calling the method that we created in the model
    res.status(201).json({ data, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);
    console.log(user);
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Login failed! Check authentication credentials' });
    }
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
    console.log(err);
  }
};

exports.getUserDetails = async (req, res) => {
  await res.json(req.userData);
};
