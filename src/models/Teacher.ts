import mongoose from "mongoose";
import { ITeacher } from "../interfaces/Teacher";

const teacherSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const Teacher = mongoose.model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
