import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('morador')
export class MoradorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  documento: string;

  @Column({ nullable: true })
  telefone: string;

  @Column({ nullable: true })
  obs: string;
}
