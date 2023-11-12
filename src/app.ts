import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import authRouter from "./routes/auth";
import teacherRouter from "./routes/teacher";
import auditoryRouter from "./routes/auditory";
import groupRouter from "./routes/group";
import courseRouter from "./routes/course";
import studentRouter from "./routes/student";
import paymentRouter from "./routes/payment";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://0.0.0.0/edu-crm")
  .then(() => {
    console.log("Mongodb connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRouter);
app.use("/api/teachers", teacherRouter);
app.use("/api/auditories", auditoryRouter);
app.use("/api/groups", groupRouter);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter);
app.use("/api/payments", paymentRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
