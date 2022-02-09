import { Module } from '@nestjs/common';
import { VisitanteService } from './visitante.service';
import { VisitanteController } from './visitante.controller';
import { VisitanteEntity } from 'src/visitante/models/visitante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([VisitanteEntity])
  ],
  providers: [VisitanteService],
  controllers: [VisitanteController]
})
export class VisitanteModule {}
