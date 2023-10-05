import mongoose from "mongoose";
import { ICourse } from "../interfaces/Course";

const courseSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },

}, {timestamps: true});

const Course = mongoose.model<ICourse>("Course", courseSchema);

export default Course; 
