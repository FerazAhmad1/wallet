import type { Request, Response } from "express";
import Payment from "../services/RazorPayPaymentGateway";
export const createOrder = async (req: Request, res: Response) => {
  try {
    const amount = req.body.amount;
    console.log("amount", amount);
    const response = await Payment.createOrder(amount);
    console.log(response);
    return res.status(200).json({
      success: "true",
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;
    const response = await Payment.verifyPayment(
      razorpay_order_id,
      razorpay_payment_id,

      razorpay_signature,
    );
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
};
