import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/Entities/user.entities";
import { Comment } from "../comments/Entities/comments.entities";


@Entity("posts")
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    image_url: string;

    @Column()
    description:string;

    @CreateDateColumn()
    creted_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;



    //Relations
    @Column()
    user_id:number

    @ManyToOne(()=>User,(user)=>user.posts)
    @JoinColumn({name:"user_id"})
    user:User[];

    @OneToMany(()=>Comment,(comment)=>comment.post)
    comments:Comment[]
}