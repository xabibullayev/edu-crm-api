import { Response, Request } from "express";
import Auditory from "../models/Auditory";

// GET ALL AUDITORIES
export const getAuditories = async (req: Request, res: Response) => {
  try {
    const auditories = await Auditory.find();

    res.status(200).json(auditories);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// GET A AUDITORY
export const getAuditory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    const auditory = await Auditory.findById(id);

    res.status(200).json(auditory);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// ADD A NEW AUDITORY
export const addAuditory = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newAuditory = new Auditory({
      title,
    });

    await newAuditory.save();

    res.status(200).json("Auditoriya kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A AUDITORY
export const editAuditory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { body } = req;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    if (!body) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!");
    }

    await Auditory.findByIdAndUpdate(id, { $set: body });

    res.status(200).json("Mag'liwmatlar o'zgertirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A AUDITORY
export const deleteAuditory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id berilmegen!");
    }

    await Auditory.findByIdAndRemove(id);

    res.status(200).json("Auditoriya o'shirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
