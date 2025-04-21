import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Users } from "../../users/entity/users.entity";

@Entity()
export class GrammarExercise {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: string;

    @Column('json')
    questions: {
        question: string;
        options: string[];
        correctAnswer: string;
    }[];

    @ManyToOne(() => Users, (user) => user.grammarExercises)
    user: Users;
}