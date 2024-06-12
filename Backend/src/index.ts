import express, { request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { log } from "console";
const app = express();
console.log(app);
mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 7000;
app.use("/helth", (req, res) => {
  res.json("Hello World!");
});
import userRoute from "./route/user.route";
app.use("/api/users", userRoute);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
