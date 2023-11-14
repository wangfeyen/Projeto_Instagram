import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, OneToMany } from "typeorm"
import { Post } from "../../posts/post.entities"
import { Comment } from "../../comments/Entities/comments.entities"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    password_hash: string

    @Column()
    bio:string

    @Column({default:0})
    followers_count:number

    @Column({default:0})
    following_count:number

    @CreateDateColumn()
    created_at:Date

    @DeleteDateColumn()
    deletade_at:Date

    //Relations

    @OneToMany(() => Post,(post)=>post.user)
    posts:Post[];

    @OneToMany(()=>Comment,(comment)=>comment.user)
    comments:Comment[];
}