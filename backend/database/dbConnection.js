import mongoose from "mongoose";
const dbConnection=async()=>{
    try {
      const connection=await mongoose.connect("mongodb+srv://yadavravishekhar589:Rr7388073@cluster0.yfoyd3z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
      console.log("databse connected",connection.connection.host)
    } catch (error) {
      console.log("not connected",error)
    }
}
export {dbConnection}