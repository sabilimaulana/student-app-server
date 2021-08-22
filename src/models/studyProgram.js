const mongoose = require("mongoose");

const studyProgramSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const StudyProgram = mongoose.model("StudyProgram", studyProgramSchema);

module.exports = StudyProgram;
