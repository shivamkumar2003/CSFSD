import express from "express";
const users = [{ id: 1, name: "Rahit", age: 21 }];

const app = express();

const port = 3006;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
    const {id}=req.params;
    const user=users.find(user=>user.id==id);
    res.send(user);
    res.send("Your ID user is fetched Successfully");
});

app.use(express.json());
app.post("/users", (req, res) => {
  const { name, age } = req.body;
  const newID = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  console.log(newID);
  users.push({ id: newID, name, age });
  res.send("new user created is successfully");
});

app.post("/post", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("wellcome");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
