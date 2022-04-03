import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VeiculoEntity } from 'src/veiculo/models/veiculo.entity';
import { Veiculo } from 'src/veiculo/models/veiculo.interface';
import { Repository } from 'typeorm';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectRepository(VeiculoEntity)
    private readonly veiculoRepository: Repository<VeiculoEntity>
  ) {}

  findAll() {
    return this.veiculoRepository.find()
  }

  findAllWithRelations() {
    return this.veiculoRepository.find({
      relations: ['apartamento']
    })
  }

  findById(id: number) {
    return this.veiculoRepository.findOne({
      where: { id: id },
      relations: ['apartamento'],
    })
  }

  createMorador(veiculo: Veiculo) {
    return this.veiculoRepository.save(veiculo)
  }

  updateMorador(id: number, veiculo: Veiculo) {
    return this.veiculoRepository.update(id, veiculo)
  }

  deleteMorador(id: number) {
    return this.veiculoRepository.delete(id)
  }
}
