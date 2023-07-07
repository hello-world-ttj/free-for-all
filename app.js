require("dotenv").config();
const express = require("express");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();
app.use(cors());
app.use(volleyball);
const db = require("./helpers/connection/connection");
const response = require("./helpers/responses/response")
app.use(express.json());


app.get('/', (req, res) => {
    return response(res, 200, "API Testing", null)
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
