import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApartamentoEntity } from 'src/apartamento/models/apartamento.entity';
import { Apartamento } from 'src/apartamento/models/apartamento.interface';
import { Repository } from 'typeorm';

@Injectable()
export class ApartamentoService {
  constructor(
    @InjectRepository(ApartamentoEntity)
    private readonly apartamentoRepository: Repository<ApartamentoEntity>
  ) {}

  createApartamento(apartamento: Apartamento) {
    return this.apartamentoRepository.save(apartamento)
  }

  findAll() {
    return this.apartamentoRepository.find()
  }
}
