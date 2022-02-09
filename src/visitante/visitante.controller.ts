import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Visitante } from 'src/visitante/models/visitante.interface';
import { VisitanteService } from 'src/visitante/visitante.service';

@Controller('visitante')
export class VisitanteController {
  constructor(private visitanteService: VisitanteService) {}

  @Get()
  findAll() {
    return this.visitanteService.findAll()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.visitanteService.findById(id)
  }

  @Get('/all')
  findAllWithRelations() {
    return this.visitanteService.findAllWithRelations()
  }

  @Post()
  create(@Body() visitante: Visitante) {
    return this.visitanteService.createVisitante(visitante)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() visitante: Visitante
  ) {
    return this.visitanteService.updateVisitante(id, visitante)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.visitanteService.deleteVisitante(id)
  }
}
