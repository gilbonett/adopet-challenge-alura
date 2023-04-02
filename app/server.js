const express = require("express");
const app = express();
const port = process.env.port || 3000;
const { sequelize } = require("./models/index.js");
const routes = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
routes(app)

app.listen(port, () => {
  console.log(`Connecting ${port}`);

  sequelize.authenticate().then(() => {console.log('Connect Succesfull')})
});
