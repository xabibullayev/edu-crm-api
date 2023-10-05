import mongoose from "mongoose";
import { IStudent } from "../interfaces/Student";

const studentSchema = new mongoose.Schema({
  firstname: {
    type: String, 
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone_number: {
    type: String, 
    required: true
  },
}, {timestamps: true});

const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student; 
