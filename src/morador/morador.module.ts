import { Module } from '@nestjs/common';
import { MoradorService } from './morador.service';
import { MoradorController } from './morador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoradorEntity } from 'src/morador/models/morador.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([MoradorEntity])
  ],
  providers: [MoradorService],
  controllers: [MoradorController]
})
export class MoradorModule {}
