const express = require("express");
const app = express();
const port = process.env.port || 3000;
const { sequelize } = require("./models/index.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Connecting ${port}`);

  sequelize.authenticate().then(() => {console.log('Connect Succesfull')})
});
