import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./router/userRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, ()=> {
    console.log(`Server running in port:${process.env.PORT || 3003}`);
})

app.use("/users", userRouter);