const express = require("express");
const config = require("config");

const app = express();

app.use("api/register", require("./routes/register.routes"));
app.use("api/auth", require("./routes/auth.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    await console.log("DB CONNECT....");
    app.listen(PORT, () => console.log("app has been started on port " + PORT));
  } catch (e) {
    console.log("Server error : ", e.message);
    process.exit(1);
  }
}

start();
