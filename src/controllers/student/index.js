const Student = require("../../models/student");

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find()
      .populate({ path: "studyProgram", select: ["name"] })
      .populate({ path: "subject", select: ["name"] });

    return res.status(200).json({
      status: "Success",
      message: "Get students successfully",
      students,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id)
      .populate({ path: "studyProgram", select: ["name"] })
      .populate({ path: "subject", select: ["name"] });

    return res.status(200).json({
      status: "Success",
      message: "Get students successfully",
      student,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const { name, email, studyProgram, subject } = req.body;

    console.log(subject);

    const newStudentModel = new Student({
      name,
      email,
      studyProgram,
      subject,
    });

    const newStudent = await newStudentModel.save();
    const students = await Student.find();

    res.status(200).json({
      status: "Success",
      message: "Add new Studentsuccessfully",
      students,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const removedStudent = await Student.findByIdAndDelete(id);

    if (!removedStudent) {
      res.status(501).json({
        status: 501,
        errorMessage: "Remove todo failed, not implemented.",
      });

      return;
    }

    const students = await Student.find();

    return res.status(200).json({
      status: "Success",
      message: `Delete student by id:${id} successfully`,
      students,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const { name, email, studyProgram, subject } = req.body;
    const { id } = req.params;

    // console.log(name, email, studyProgram);

    const updatedStudent = await Student.findByIdAndUpdate(id, {
      $set: { name, email, studyProgram, subject },
    });

    if (!updatedStudent) {
      res.status(501).json({
        status: 501,
        errorMessage: "Update student failed, not implemented.",
      });

      return;
    }

    const students = await Student.find().populate("studyProgram");

    res.status(200).json({
      status: "Success",
      message: `Update Student by id:${id} successfully`,
      updatedStudent,
      students,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "Failed", message: "Internal Server Error" });
  }
};
