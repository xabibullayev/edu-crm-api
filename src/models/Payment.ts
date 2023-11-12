import mongoose from "mongoose";
import { IPayment } from "../interfaces/Payment";

const paymentSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    paymentDate: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model<IPayment>("Payment", paymentSchema);

export default Payment;
