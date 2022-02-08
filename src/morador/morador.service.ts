import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoradorEntity } from 'src/morador/models/morador.entity';
import { Morador } from 'src/morador/models/morador.interface';
import { Repository } from 'typeorm';

@Injectable()
export class MoradorService {
  constructor(
    @InjectRepository(MoradorEntity)
    private readonly moradorRepository: Repository<MoradorEntity>
  ) {}

  findAll() {
    return this.moradorRepository.find()
  }

  findById(id: number) {
    return this.moradorRepository.findOne(id)
  }

  createMorador(morador: Morador) {
    return this.moradorRepository.save(morador)
  }

  updateMorador(id: number, morador: Morador) {
    return this.moradorRepository.update(id, morador)
  }

  deleteMorador(id: number) {
    return this.moradorRepository.delete(id)
  }
}
