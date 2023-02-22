// import giHfafaicon from "react-icons/gi"
// const giHfafaicon = require("react-icons/gi")

// Import express module
const express = require("express");
const StudentModel = require("./schema.js");
const { database } = require("./databse");
const mongoose = require("mongoose");
// Create instance of express (enable express)
const server = express();
server.use(express.json());
const port = 1000;

// Db connect
mongoose
  .connect(
    "mongodb+srv://kunalr-99:Kunal2018@taskster-app.7aegm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(`error is ${err.message}`));

// http://localhost:1000 => he ghe tujhe posts
server.get("/", (request, response) => {
  response.json("Learn Backend");
});

// http://localhost:1000/posts => he ghe tujhe posts
server.get("/posts", (request, response) => {
  response.json("He ghe tujhe posts");
});

// http://localhost:1000/timeline => he ghe tujhe tl
server.get("/timeline", (request, response) => {
  response.json("He ghe tujhe tl");
});

// database.teacher === tname  => [{}]
server.get("/teacher1/:tname", (req, res) => {
  const teacher = req.params.tname;
  const studentsArray = database.filter((data) => {
    return data.teacher === teacher;
  });
  if (studentsArray.length !== 0) {
    console.log({ students: studentsArray.map((stud) => stud.name) });
    return res.json({ students: studentsArray });
  } else {
    console.log({ error: "No students found!!!" });
    return res.json({ error: "No students found!!!" });
  }
});

server.post("/studs", async (req, res) => {
  const newStudent = await StudentModel.create(req.body);
  return res.status(201).json({ newStudent });
});

server.get("/studs", async (req, res) => {
  const allStudents = await StudentModel.find();
  return res.status(200).json({ allStudents });
});

//  const params = {
//   tname: "pillu",
//   xyx: "kuanl"
//  }

//  const { tname, xyz} = req.params
server.get("/teacher/:tname", async (req, res) => {
  const { tname } = req.params;
  const studentsArray = await StudentModel.find({ teacher: tname });
  return res.status(200).json({ studentsArray });
});

server.delete("/:studname", async (req, res) => {
  const { studname } = req.params;
  const deletedStudent = await StudentModel.deleteOne({ name: studname });
  return res.status(200).json({ name: deletedStudent });
});

//  const params = {
//   naav: "sanket"
//  }

server.put("/student/:naav", async (req, res) => {
  const { naav } = req.params;
  const { name } = req.body;
  const filteredStudent = await StudentModel.findOne({ name: naav });
  const updatedStudent = await StudentModel.updateOne(
    { name: naav },
    {
      ...filteredStudent._doc,
      name: name,
    }
  );
  return res.status(200).json({ name: updatedStudent });
});

// server.put("/teacher/:naav", async (req, res) => {
//   const { naav } = req.params;
//   const { name } = req.body;
//   const filteredStudent = await StudentModel.findOne({ name: naav });
//   const updatedStudent = await StudentModel.updateOne(
//     { name: naav },
//     {
//       ...filteredStudent._doc,
//       name: name,
//     }
//   );
//   return res.status(200).json({ name: updatedStudent });
// });

server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
