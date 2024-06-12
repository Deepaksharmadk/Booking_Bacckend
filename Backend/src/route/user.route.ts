import express from "express";
const router = express.Router();
import { registerValidation } from "../middleware/valitaion";
import { register } from "../controller/user.controller";
router.route("/register").post(registerValidation, register);
export default router;
