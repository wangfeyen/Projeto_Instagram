import { DataSource } from "typeorm"
import { User } from "../Entities/user"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "2020",
    database: "user_instagram",
    entities:[User],
    synchronize:true,
})