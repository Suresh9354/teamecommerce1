import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongdb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productroute.js";
import cartRouter from "./routes/cartRoute.js";

//app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middleware

app.use(express.json());
app.use(cors());

//api endpoint

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => console.log("server is running on port : " + port));
