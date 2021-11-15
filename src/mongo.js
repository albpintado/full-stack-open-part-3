// console.log(process.argv.length);

const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://apl:${password}@cluster0.eb7p9.mongodb.net/person-app?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const entrySchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Entry = mongoose.model("Entry", entrySchema);

if (process.argv.length === 5) {
  const newEntry = new Entry({
    name: process.argv[3],
    number: process.argv[4],
  });
  newEntry.save().then((result) => {
    console.log("New entry saved to DB.");
    mongoose.connection.close();
  });
} else {
  Entry.find({}).then((result) => {
    result.forEach((entry) => {
      console.log(`${entry.name} - ${entry.number}`);
    });
    mongoose.connection.close();
  });
}
