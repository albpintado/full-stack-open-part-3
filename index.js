const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  { id: 1, name: "Arto Hellas", number: "040-123456" },
  { id: 2, name: "Ada Lovelace", number: "040-789012" },
  { id: 3, name: "Dan Abramov", number: "040-345678" },
  { id: 3, name: "Mary Poppendick", number: "040-901234" },
];

app.get("/info", (_, response) => {
  const html = `<div><p>Phonebook has info for ${
    persons.length
  } people</p><p>${new Date().toUTCString()}</p></div>`;

  response.send(html);
});

app.get("/api/persons", (_, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const idToSearch = Number(request.params.id);
  console.log(idToSearch);
  const person = persons.find((person) => person.id === idToSearch);
  if (!person) {
    response.sendStatus(404).end();
  }
  response.json(person);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
