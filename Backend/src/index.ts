import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
