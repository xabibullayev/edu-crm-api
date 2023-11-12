import mongoose, { Document } from "mongoose";

export interface IStudent extends Document {
  firstname: String;
  lastname: String;
  phoneNumber: String;
  birthYear: Date;
  socialStatus: String;
  groupId: mongoose.Schema.Types.ObjectId;
  eduStatus: String;
  courses: [
    {
      id: mongoose.Schema.Types.ObjectId;
      title: String;
      duration: Number;
      startDate: Date;
      endDate: Date;
      price: Number;
    }
  ];
  balans: Number;
}
