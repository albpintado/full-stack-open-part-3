const mongoose = require("mongoose");

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(result => {
  console.log("Connected to DB!")
}).catch((error) => {
  console.log("Error connecting to DB: ", error.message)
});

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
});

entrySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = JSON.stringify(returnedObject._id);
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Entry', entrySchema);
