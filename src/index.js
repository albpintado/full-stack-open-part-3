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


let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "040-789012" },
  { id: 3, name: "Dan Abramov", number: "040-345678" },
  { id: 4, name: "Mary Poppendick", number: "040-901234" },
];

app.get("/info", (_, response) => {
  const html = `<div><p>Phonebook has info for ${
    persons.length
  } people</p><p>${new Date().toUTCString()}</p></div>`;

  response.send(html);
});

app.get("/api/persons", (_, response) => {
  // Step1, exercise 3.13 made in another commit by error. Here it is
  Entry.find({}).then((entries) => {
    response.json(entries);
  }).catch((error) => console.log("Error: ", error.message));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }


  // if (body.name === "" || body.number === "") {
  //   response
  //     .json({ error: "Content missing" })
  //     .status(400)
  //     .end();
  // }

  const person = new Entry({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedNote => response.json(savedNote))

  const isNameAlreadyAdded = (personName) =>
    persons.some((person) => person.name === personName);

  if (isNameAlreadyAdded(person.name)) {
    response.json({ error: "Name must be unique" }).sendStatus(400).end();
  }

  // person.id = Math.floor(Math.random() * 9999999);
  // persons = persons.concat(person);

  response.sendStatus(201);
});

app.get("/api/persons/:id", (request, response) => {
  const idToSearch = Number(request.params.id);
  const person = persons.find((person) => person.id === idToSearch);
  if (!person) {
    response.sendStatus(404).end();
  }
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const idToSearch = Number(request.params.id);
  persons = persons.filter((person) => person.id !== idToSearch);
  response.sendStatus(204);
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
