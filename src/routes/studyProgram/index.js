const { Router } = require("express");
const StudyProgram = require("../../models/studyProgram");

const router = Router();

router.post("/study-program", async (req, res) => {
  try {
    const { name } = req.body;

    const newStudyProgramModel = new StudyProgram({ name });

    const newStudyProgram = await newStudyProgramModel.save();
    const studyPrograms = await StudyProgram.find();

    res.status(200).json({
      status: "Success",
      message: "Add new Study Program successfully",
      studyPrograms,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
});

module.exports = router;
