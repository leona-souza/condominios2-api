import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitaEntity } from 'src/visita/models/visita.entity';
import { Visita } from 'src/visita/models/visita.interface';
import { Repository } from 'typeorm';

@Injectable()
export class VisitaService {
  constructor(
    @InjectRepository(VisitaEntity)
    private readonly visitaRepository: Repository<VisitaEntity>
  ) {}

  findAll() {
    return this.visitaRepository.find()
  }

  findAllWithRelations() {
    return this.visitaRepository.find({
      relations: [
        'apartamento',
        'visitante'
      ],
    })
  }

  findById(id: number) {
    return this.visitaRepository.findOne({
      where: { id: id },
      relations: [
        'apartamento',
        'visitante'
      ],
    })
  }

  createVisita(visita: Visita) {
    return this.visitaRepository.save(visita)
  }

  updateVisita(id: number, visita: Visita) {
    return this.visitaRepository.update(id, visita)
  }

  deleteVisita(id: number) {
    return this.visitaRepository.delete(id)
  }
}
