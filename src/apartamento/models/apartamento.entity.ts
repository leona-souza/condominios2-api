import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('apartamento')
export class ApartamentoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column()
  torre: string;

  @Column({ nullable: true })
  obs: string;
}
