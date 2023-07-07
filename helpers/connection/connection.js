const mongoose = require("mongoose");
try {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`Mongoose connected...`);
    })
    .catch((err) => console.log(err));
} catch (error) {
  console.log(error);
}
let db = mongoose.connection;
module.exports = db;
