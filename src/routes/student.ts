import { Router } from "express";
import { addStudent, editStudent, getStudent, getStudents } from "../controllers/student";
const router = Router();

// GET A STUDENT
router.get('/:id', getStudent )

// GET ALL STUDENTS
router.get('/', getStudents )

// ADD A STUDENT 
router.post('/', addStudent)

// EDIT A STUDENT
router.patch('/:id', editStudent)

// DELETE A STUDENT
router.delete("/", addStudent);

export default router;
