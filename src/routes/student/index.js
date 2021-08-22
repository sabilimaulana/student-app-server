const { Router } = require("express");
const {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
} = require("../../controllers/student");

const router = Router();

router.get("/students", getStudents);

router.get("/student/:id", getStudent);

router.post("/student", addStudent);

router.delete("/student/:id", deleteStudent);

router.patch("/student/:id", updateStudent);

module.exports = router;
