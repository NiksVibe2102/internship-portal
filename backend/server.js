import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from 'dotenv'
dotenv.config();
import { dbConnection } from "./database/dbConnection.js";
console.log(process.env.MONGO_URI)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

dbConnection()
.then(()=>{
  app.listen(5000,()=>{
    console.log("server is running on port 5000");
  })
})
.catch((err)=>{
  console.log("something weent wrong",err);
})