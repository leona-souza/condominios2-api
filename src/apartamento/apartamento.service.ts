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

  findAll() {
    return this.apartamentoRepository.find()
  }

  findAllWithRelations() {
    return this.apartamentoRepository.find({
      relations: [
        'morador',
        'veiculo',
        'visitante'
      ],
    })
  }

  findById(id: number) {
    return this.apartamentoRepository.findOne({
      where: { id: id },
      relations: [
        'morador',
        'veiculo',
        'visitante'
      ],
    })
  }

  createApartamento(apartamento: Apartamento) {
    return this.apartamentoRepository.save(apartamento)
  }

  updateApartamento(id: number, apartamento: Apartamento) {
    return this.apartamentoRepository.update(id, apartamento)
  }

  deleteApartamento(id: number) {
    return this.apartamentoRepository.delete(id)
  }
}
