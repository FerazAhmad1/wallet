import express from "express";
import paymentRouter from "./routes/payment";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "*",
  }),
);
app.use(express.json());
app.use("/payment", paymentRouter);
export default app;
