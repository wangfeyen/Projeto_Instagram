import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password_hash: string

    @Column()
    bio:string

    @Column()
    followers_count:number

    @Column()
    following_count:number

    @CreateDateColumn()
    created_at:Date

    @DeleteDateColumn()
    deletade_at:Date
}