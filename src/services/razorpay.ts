import Razorpay from "razorpay";
console.log(process.env.RAZOR_PAY_KEY_ID, process.env.RAZOR_PAY_KEY_SECRET);
const razorpayInstace = new Razorpay({
  key_id: process.env.RAZOR_PAY_KEY_ID,
  key_secret: process.env.RAZOR_PAY_KEY_SECRET,
});
export default razorpayInstace;
