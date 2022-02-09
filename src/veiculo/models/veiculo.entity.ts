import { ApartamentoEntity } from "src/apartamento/models/apartamento.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('veiculo')
export class VeiculoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column({ nullable: true })
  marca: string;

  @Column({ nullable: true })
  modelo: string;

  @Column({ nullable: true })
  cor: string;

  @Column({ nullable: true })
  obs: string;

  @ManyToOne(() => ApartamentoEntity, apartamento => apartamento.veiculo)
  apartamento: ApartamentoEntity;
}
