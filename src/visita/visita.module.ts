import { Module } from '@nestjs/common';
import { VisitaService } from './visita.service';
import { VisitaController } from './visita.controller';
import { VisitaEntity } from 'src/visita/models/visita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([VisitaEntity])
  ],
  providers: [VisitaService],
  controllers: [VisitaController]
})
export class VisitaModule {}
