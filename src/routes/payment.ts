import { Router } from "express";
import {
  addPayment,
  deletePayment,
  editPayment,
  getPayment,
  getPayments,
} from "../controllers/payment";
const router = Router();

// GET A PAYEMENT
router.get("/:id", getPayment);

// GET ALL PAYMENTS
router.get("/", getPayments);

// ADD A PAYEMENT
router.post("/", addPayment);

// EDIT A PAYEMENT
router.patch("/:id", editPayment);

// DELETE A PAYEMENT
router.delete("/", deletePayment);

export default router;
