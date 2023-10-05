import { Router } from "express";
import { addCourse, editCourse, getCourses, getCourse } from "../controllers/course";
const router = Router();

// GET A COURSE
router.get('/:id', getCourse )

// GET ALL COURSES
router.get('/', getCourses )

// ADD A COURSE 
router.post('/', addCourse)

// EDIT A COURSE
router.patch('/:id', editCourse)

// DELETE A COURSE
router.delete("/", addCourse);

export default router;
