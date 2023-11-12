import { Router } from "express";
import {
  addAuditory,
  editAuditory,
  getAuditory,
  getAuditories,
} from "../controllers/auditory";
const router = Router();

// GET A AUDITORY
router.get("/:id", getAuditory);

// GET ALL AUDITORIES
router.get("/", getAuditories);

// ADD A AUDITORY
router.post("/", addAuditory);

// EDIT A AUDITORY
router.patch("/:id", editAuditory);

// DELETE A AUDITORY
router.delete("/", addAuditory);

export default router;
