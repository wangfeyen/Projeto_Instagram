import { DataSource } from "typeorm"
import { User } from "../modules/users/Entities/user.entities"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities:[User],
    synchronize:true,
})