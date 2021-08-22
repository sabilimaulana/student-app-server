const { Router } = require("express");
const Subject = require("../../models/subject");

const router = Router();

router.post("/subject", async (req, res) => {
  try {
    const { name } = req.body;

    const subjectModel = new Subject({ name });

    const newSubject = await subjectModel.save();
    const subjects = await Subject.find();

    res.status(200).json({
      status: "Success",
      message: "Add new Subject successfully",
      subjects,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
});

module.exports = router;
