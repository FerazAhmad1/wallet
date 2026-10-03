import razorpayInstace from "./razorpay";
import Razorpay from "razorpay";
import { createCryptoSignature } from "../commonFunction/functions";

interface IPaymentGateway {
  createOrder: (amount: number) => Promise<unknown>;
  verifyPayment: (
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
  ) => {};
}

class RazorPayPaymentGateway implements IPaymentGateway {
  private razorpayInstance: Razorpay;

  constructor(razorpayInstance: Razorpay) {
    this.razorpayInstance = razorpayInstance;
  }

  async createOrder(amount: number) {
    try {
      const response = await this.razorpayInstance.orders.create({
        amount,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
          userId: 1,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async verifyPayment(
    razorpay_order_id: string,
    razorpay_payment_id: string,
    razorpay_signature: string,
  ) {
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const secret = process.env.RAZOR_PAY_KEY_SECRET || "";
    const signature = createCryptoSignature({ body, secret });
    return { verify: razorpay_signature === signature };
  }
}
const paymentService = new RazorPayPaymentGateway(razorpayInstace);
export default paymentService;
