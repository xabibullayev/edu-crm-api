import { Router } from "express";
import { logggedIn, login, register } from "../controllers/auth";
const router = Router();

router.get("/loggedIn", logggedIn);

router.post("/register", register);

router.post("/login", login);

export default router;
