import express, { Request, Response } from "express";
import { atualizarUsuario, cadastrarUsuario, deletarUsuario, listarUsuarios } from "./modules/users/controllers/user.controllers";


const app = express();

app.use(express.json());


app.post("/users",cadastrarUsuario);
app.get("/users",listarUsuarios);
app.patch("/users/:user_id",atualizarUsuario);
app.delete("/users/:user_id",deletarUsuario)

export default app;
