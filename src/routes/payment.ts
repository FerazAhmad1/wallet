import express from "express";
import { createOrder, verifyPayment } from "../controllers/payment";
const router = express.Router();

router.route("/").post(createOrder);
router.post("/verify", verifyPayment);
export default router;
