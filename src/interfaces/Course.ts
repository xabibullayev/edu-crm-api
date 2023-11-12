import { Document } from "mongoose";

export interface ICourse extends Document {
  title: string,
  price: number,
  duration: number
}
