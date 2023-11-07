import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const lidarComRequisição=async(req:Request,res:Response)=>{
    return res.status(200).json({ok:true});
}
app.get("/teste",lidarComRequisição);
export default app;
