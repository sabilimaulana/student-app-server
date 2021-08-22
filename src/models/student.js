const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    studyProgram: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudyProgram",
      required: true
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
