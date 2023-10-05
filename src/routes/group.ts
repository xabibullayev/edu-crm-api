import { Router } from "express";
import { addGroup, editGroup, getGroup, getGroups } from "../controllers/group";
const router = Router();

// GET A GROUP
router.get('/:id', getGroup )

// GET ALL GROUPS
router.get('/', getGroups )

// ADD A GROUP 
router.post('/', addGroup)

// EDIT A GROUP
router.patch('/:id', editGroup)

// DELETE A GROUP
router.delete("/", addGroup);

export default router;
