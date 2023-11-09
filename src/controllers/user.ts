import { Request, Response } from "express";
import { User } from "../Entities/user";
import { AppDataSource } from "../database/data-source";

export const cadastrarUsuario=async(req:Request,res:Response)=>{
    try {
        const user=new User();
        user.name=req.body.name;
        user.email=req.body.email;
        user.password=req.body.password;

        await AppDataSource.getRepository(User).save(user);

        return res.status(201).json({ok:true});
        
    } catch (error) {
        console.log(error,"Erro ao cadastrar usuário");
        return res
            .status(500)
            .json({ok:false,message:"Erro ao cadastrar usuário"});
    }
}

export const listarUsuarios=async(req:Request,res:Response)=>{
    try {
        const users=await AppDataSource.getRepository(User).find();
        return res.status(200).json({ok:true,users:users})
    } catch (error) {
        console.log("Erro ao listar usuários");
        return res.status(500).json({ok:false,message:"Erro ao listar usuários"})
    }
}

export const atualizarUsuario=async(req:Request,res:Response)=>{
    const id=req.params.user_id;
    try{
        const user = await AppDataSource.getRepository(User).findOne({where:{id:+id}});
        
        if (!user){
            return res.status(404).json({ok:false,message:"Não existe um usuário com esse ID"});
        }
        if(req.body.name){
            user.name=req.body.name;
        }
        if(req.body.email){
            user.email=req.body.email;
        }
        if(req.body.password){
            user.password=req.body.password;
        }

        await AppDataSource.getRepository(User).save(user);

        return res.status(200).json({ok:true})
    }catch(error){
        console.log(error,"Erro ao atualizar o usuário");
        return res
        .status(500)
        .json({ok:false,message:"Erro ao atualizar o usuário"})
    }
}