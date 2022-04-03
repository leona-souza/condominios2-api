import { ApartamentoEntity } from "src/apartamento/models/apartamento.entity";
import { VisitanteEntity } from "src/visitante/models/visitante.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('visita')
export class VisitaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ApartamentoEntity, apartamento => apartamento.visita)
  apartamento: ApartamentoEntity;

  @ManyToOne(() => VisitanteEntity, visitante => visitante.visita)
  visitante: VisitanteEntity;

  @Column()
  data: Date;

  @Column({ nullable: true })
  obs: string;
}
