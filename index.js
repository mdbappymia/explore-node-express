const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.port || 8080;
const users = [
  { id: 0, name: "Sabana", email: "Sabana@gmail.com" },
  { id: 1, name: "Bobita", email: "Bobita@gmail.com" },
  { id: 2, name: "Rojina", email: "Rojina@gmail.com" },
  { id: 3, name: "Shabnoor", email: "Shabnoor@gmail.com" },
  { id: 4, name: "Suchorita", email: "Suchorita@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("Hello");
});

// post

app.post("/users", (req, res) => {
  console.log("hitting post", req.body);
  const newUser = req.body;
  newUser.id = users.length;
  users.push = newUser;
  res.json(newUser);
});

// use query para meter
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// dynamic route
app.get("/users/:id", (req, res) => {
  const index = req.params.id;
  const user = users[index];
  res.send(user);
});
app.listen(port, () => {
  console.log(`App listen on port ${port}`);
});
