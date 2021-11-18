const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGO_URL;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to DB!");
}).catch((error) => {
  console.log("Error connecting to DB: ", error.message);
});

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    unique: true
  },
  number: {
    type: String,
    minLength: 8,
    required: true
  },
});

entrySchema.plugin(uniqueValidator);

entrySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Entry", entrySchema);
