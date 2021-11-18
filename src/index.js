require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const Entry = require("./entry");

const morgan = require("morgan");
morgan.token("body", (req, _) => JSON.stringify(req.body));
app.use(morgan(":method :url :status :response-time ms - :body"));

const cors = require("cors");
app.use(cors());

app.use(express.static("build"));

const errorHandler = (error, request, response, next) => {
  console.log(error);
  if (error.name === "CastError") {
    response.status(400).send({ error: 'Invalid ID format.' })
  }
  next(error);
}

app.get("/info", (_, response) => {
    Entry
      .find({})
      .then((persons) => {
        const html = `<div><p>Phonebook has info for ${
          persons.length
        } people</p><p>${new Date().toUTCString()}</p></div>`;
        response.send(html);
      })
      .catch((error) => console.log("Error: ", error.message))
});

app.get("/api/persons", (_, response) => {
  // Step1, exercise 3.13 made in another commit by error. Here it is
  Entry.find({}).then((entries) => {
    response.json(entries);
  }).catch((error) => console.log("Error: ", error.message));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  const person = new Entry({
    name: body.name,
    number: body.number,
  })

  person
    .save()
    .then(savedNote => {
      response
      .sendStatus(201)
      .json(savedNote)
      .end()})
    .catch(error => response.status(400).json({ error: 'Name must be unique' }))
});

app.put("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  const body = request.body;
  const newEntry = { name: body.name, number: body.number }
  Entry.findByIdAndUpdate(id, newEntry, { new: true })
    .then(person => {
      response.json(person)
    })
    .catch(error => next(error))
});

app.get("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;
  Entry.findById(id)
    .then(person => {
      response.json(person)
    })
    .catch(error => next(error))
});

app.delete("/api/persons/:id", (request, response, next) => {
  const { id } = request.params;
  Entry.findByIdAndRemove(id)
    .then(result => response.status(204).end())
    .catch(error => next(error));
});

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
