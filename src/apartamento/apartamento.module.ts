import { Module } from '@nestjs/common';
import { ApartamentoService } from './apartamento.service';
import { ApartamentoController } from './apartamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartamentoEntity } from 'src/apartamento/models/apartamento.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([ApartamentoEntity])
  ],
  providers: [ApartamentoService],
  controllers: [ApartamentoController]
})
export class ApartamentoModule {}
