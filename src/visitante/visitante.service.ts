import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitanteEntity } from 'src/visitante/models/visitante.entity';
import { Visitante } from 'src/visitante/models/visitante.interface';
import { Repository } from 'typeorm';

@Injectable()
export class VisitanteService {
  constructor(
    @InjectRepository(VisitanteEntity)
    private readonly visitanteRepository: Repository<VisitanteEntity>
  ) {}

  findAll() {
    return this.visitanteRepository.find()
  }

  findAllWithRelations() {
    return this.visitanteRepository.find({
      relations: ['apartamento'],
    })
  }

  findById(id: number) {
    return this.visitanteRepository.findOne({
      where: { id: id },
      relations: ['apartamento'],
    })
  }

  createVisitante(visitante: Visitante) {
    return this.visitanteRepository.save(visitante)
  }

  updateVisitante(id: number, visitante: Visitante) {
    return this.visitanteRepository.update(id, visitante)
  }

  deleteVisitante(id: number) {
    return this.visitanteRepository.delete(id)
  }
}
