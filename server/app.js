const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { routes } = require("./src/routes");

mongoose.connect(
  "mongodb+srv://gigaChad:mamatato123@cluster0.oeguv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes.forEach((item) => {
  console.log(item);
  app.use(`/api/${item}`, require(`./src/routes/${item}`));
});

const PORT = 5000;
app.listen(PORT);

console.log(`Server running at ${PORT}`);
