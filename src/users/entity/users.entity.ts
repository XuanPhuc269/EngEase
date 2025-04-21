import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { GrammarExercise } from '../../grammar-exercise/entity/grammar-exercise.entity';

@Entity()
export class Users {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 username: string;
 
 @Column()
 password: string;

 @OneToMany(() => GrammarExercise, (grammarExercise) => grammarExercise.user)
 grammarExercises: GrammarExercise[];
}