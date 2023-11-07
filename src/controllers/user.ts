import { Request, Response } from "express";
import { User } from "../Entities/user";
import { AppDataSource } from "../database/data-source";

export const cadastrarUsuario=async(req:Request,res:Response){
    try {
        const user=new User();
        user.name=req.body.name;
        user.email=req.body.email;
        user.password=req.body.password;

        await AppDataSource.getRepository(User).save(user);

        return res.status(201).json({ok:true});
        
    } catch (error) {
        
    }
}