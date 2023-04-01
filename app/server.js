const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(require('./routes'))
app.listen(port, () => {
  console.log(`Connecting ${port}`)
})
