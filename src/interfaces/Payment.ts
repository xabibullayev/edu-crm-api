import mongoose, { Document } from "mongoose";

export interface IPayment extends Document {
  amount: Number;
  paymentDate: Date;
  paymentType: String;
  studentId: mongoose.Schema.Types.ObjectId;
}
