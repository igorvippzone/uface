const express = require("express");
const formData = require("express-form-data");

const api = express();

const app = express();

app.use(formData.parse());
app.use(api, require("./api"));

const hostname = "0.0.0.0";
const PORT = process.env.PORT || 3000;

app.listen(PORT, hostname, () => {
  console.log(`Server run http://localhost:${PORT}/`);
});
