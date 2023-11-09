import "reflect-metadata"
import dotenv from "dotenv"

dotenv.config();
import { AppDataSource } from "./database/data-source"
import app from "./app";
import { env } from "process";
const main = async()=>{
    try {
        await AppDataSource.initialize()
            console.log("Banco de dados conectado com sucesso!")

        app.listen(process.env.PORT,()=>{
            console.log(`Aplicação ouvindo requisição na porta ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
};
main();

