import { Response, Request } from "express";
import Group from "../models/Group";

// GET ALL GROUPS
export const getGroups = async (req: Request, res: Response) => {
  try {
    const groups = await Group.find();

    res.status(200).json(groups);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// GET A GROUP
export const getGroup = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    const group = await Group.findById(id);

    res.status(200).json(group);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// ADD A NEW GROUP
export const addGroup = async (req: Request, res: Response) => {
  try {
    const {
      title,
      courseId,
      teacherId,
      days,
      auditoryId,
      time,
      startDate,
      endDate,
    } = req.body;

    if (
      !title ||
      !courseId ||
      !teacherId ||
      !days ||
      !auditoryId ||
      !time ||
      !startDate ||
      !endDate
    ) {
      return res
        .status(400)
        .json("Iltimas berilgen hamme maydanlardi toldirin!");
    }

    const newGroup = new Group({
      title,
      courseId,
      teacherId,
      days,
      auditoryId,
      time,
      startDate,
      endDate,
    });

    await newGroup.save();

    res.status(200).json("Gruppa kiritildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// EDIT A GROUP
export const editGroup = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, courseId, teacherId, auditoryId, startDate, duration } =
      req.body;

    if (!id) {
      return res.status(400).json("Id kiritilmegen!");
    }

    if (
      !title ||
      !courseId ||
      !teacherId ||
      !auditoryId ||
      !startDate ||
      !duration
    ) {
      return res.status(400).json("Taza mag'liwmatlar kiritilmegen!");
    }

    const endDate = new Date(
      new Date(startDate).setMonth(new Date(startDate).getMonth() + duration)
    );

    const newData = {
      title,
      courseId,
      teacherId,
      auditoryId,
      startDate,
      endDate,
    };

    await Group.findByIdAndUpdate(id, { $set: newData });

    res.status(200).json("Mag'liwmatlar o'zgertirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};

// DELETE A GROUP
export const deleteGroup = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Id berilmegen!");
    }

    await Group.findByIdAndRemove(id);

    res.status(200).json("Gruppa o'shirildi!");
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error!";
    res.status(500).json(message);
  }
};
