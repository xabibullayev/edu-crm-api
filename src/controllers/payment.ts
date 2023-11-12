import { Response, Request } from "express";
import Payment from "../models/Payment";
import Student from "../models/Student";

// GET ALL PAYMENTS
export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find();

    res.status(200).json(payments);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// GET A PAYMENT
export const getPayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    const payment = await Payment.findById(id);

    res.status(200).json(payment);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// ADD A NEW PAYMENT
export const addPayment = async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const { amount, paymentDate, paymentType, studentId } = req.body;

    if (!amount || !paymentDate || !paymentType || !studentId) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(400).json("Oqiwshi tabilmadi!");
    }

    const newPayment = new Payment({
      amount,
      paymentDate,
      paymentType,
      studentId,
    });

    await newPayment.save();

    console.log(student);

    await student.updateOne({
      balans: Number(student.balans) + parseFloat(amount),
    });

    res.status(200).json("Tolem kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A PAYMENT
export const editPayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    if (!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!");
    }

    await Payment.findByIdAndUpdate(id, { $set: body });

    res.status(200).json("Mag'liwmatlar o'zgertirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A PAYMENT
export const deletePayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id berilmegen!");
    }

    await Payment.findByIdAndRemove(id);

    res.status(200).json("To'lem o'shirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
