import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/Entities/user.entities";
import { Post } from "../../posts/post.entities";


@Entity("comments")
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    text:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;



    //Relacionamentos
    @Column()
    user_id:number
    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User,(user)=>user.comments)
    user:User;


    @Column()
    post_id:number
    @ManyToOne(()=>Post,(post)=>post.comments)
    @JoinColumn({name:"post_id"})
    post:Post;
}