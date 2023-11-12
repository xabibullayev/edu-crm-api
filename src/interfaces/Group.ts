import mongoose, { Document } from "mongoose";

export interface IGroup extends Document {
  title: String;
  courseDate: mongoose.Schema.Types.ObjectId;
  teacherDate: mongoose.Schema.Types.ObjectId;
  auditoryDate: mongoose.Schema.Types.ObjectId;
  startDate: Date;
  endDate: Date;
}
