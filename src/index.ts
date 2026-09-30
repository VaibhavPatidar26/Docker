import express from "express";
import { prisma } from "./db";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({
    message: "these are users details",
    users,
  });
});

app.post("/", async (req, res) => {
  

 const user  = await prisma.user.create({
    data: {
      name: Math.random().toString(),
      email:Math.random().toString() ,
      password: Math.random().toString()
    },
  });

  res.json({
    message: "user created",
   user
  });
});

app.listen(3000, () => {
  console.log("server running");
});