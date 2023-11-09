import express, { Request, Response } from "express";
import { cadastrarUsuario, listarUsuarios } from "./controllers/user";

const app = express();

app.use(express.json());


app.get("/users",cadastrarUsuario);
app.patch("/users",listarUsuarios);
app.put("/users/:user_id",);
app.delete("/users/user_id")

export default app;
