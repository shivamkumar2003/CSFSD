// const express=require('express');
import express from "express"; // import
const app = express(); // create server
app.get("/", (req, res) => {
  res.send("Welcome to the backend");
});

//http://localhost:3000/api?name=Shivam&rollno=168
//http://localhost:3000/api (default values)
app.get("/api", (req, res) => {
  // const {name="Guest",rollno="100"}=req.query;
  try {
    const { name, rollno } = req.query;
    if (!name) {
      res.send({ status: 404, message: "name dena hai" });
      // res.status(404).send("name dena hai");
    } else {
      res.send(`My name is ${name} and Rollno. is ${rollno}`);
    }
  } catch (error) {
    console.log("Error is:" + error.message);
  }
});
// ^^^ this is get and query string method

// this is parameters - perams
//http://localhost:3000/api/sitaram/101
app.get("/api/:name/:rollno", (req, res) => {
  const { name ,rollno } = req.params;
  res.send(`My name is ${name} and my roll no is ${rollno}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
// app.listen(3000);//listen
