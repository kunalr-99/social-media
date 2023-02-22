const mongoose = require("mongoose");
// import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
  {
    name: String,
    teacher: String,
    year: Number,
  }
  //   {
  //     timeStamps: true,
  //   }
);

const StudentModel = mongoose.model("student", studentSchema);

module.exports = StudentModel;
// export deafault StudentModel
