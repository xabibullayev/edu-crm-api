import { Router } from "express";
import { addTeacher, editTeacher, getTeacher, getTeachers } from "../controllers/teacher";
const router = Router();

// GET A TEACHER
router.get('/:id', getTeacher )

// GET ALL TEACHERS
router.get('/', getTeachers )

// ADD A TEACHER 
router.post('/', addTeacher)

// EDIT A TEACHER
router.patch('/:id', editTeacher)

// DELETE A TEACHER
router.delete("/", addTeacher);

export default router;
