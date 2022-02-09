import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MoradorEntity } from "src/morador/models/morador.entity";
import { VeiculoEntity } from "src/veiculo/models/veiculo.entity";
import { VisitanteEntity } from "src/visitante/models/visitante.entity";

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

  @OneToMany(() => MoradorEntity, morador => morador.apartamento)
  morador: MoradorEntity[];

  @OneToMany(() => VeiculoEntity, veiculo => veiculo.apartamento)
  veiculo: VeiculoEntity[];

  @OneToMany(() => VisitanteEntity, visitante => visitante.apartamento)
  visitante: VisitanteEntity[];
}
