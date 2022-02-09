import { Module } from '@nestjs/common';
import { VeiculoService } from './veiculo.service';
import { VeiculoController } from './veiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VeiculoEntity } from 'src/veiculo/models/veiculo.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([VeiculoEntity])
  ],
  providers: [VeiculoService],
  controllers: [VeiculoController]
})
export class VeiculoModule {}
