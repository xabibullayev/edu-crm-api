import mongoose from "mongoose";
import { IStudent } from "../interfaces/Student";

const studentSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    birthYear: {
      type: Date,
      require: true,
    },
    socialStatus: {
      type: String,
      required: true,
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    eduStatus: {
      type: String,
      required: true,
      default: "studying",
    },
    courses: {
      type: [
        {
          id: mongoose.Schema.Types.ObjectId,
          title: String,
          duration: Number,
          startDate: Date,
          endDate: Date,
          price: Number,
        },
      ],
      required: true,
    },
    balans: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
