import { ApartamentoEntity } from "src/apartamento/models/apartamento.entity";
import { VisitaEntity } from "src/visita/models/visita.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('visitante')
export class VisitanteEntity {
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

  @ManyToOne(() => ApartamentoEntity, apartamento => apartamento.visitante)
  apartamento: ApartamentoEntity;

  @ManyToOne(() => VisitaEntity, visita => visita.visitante)
  visita: VisitaEntity;
}
