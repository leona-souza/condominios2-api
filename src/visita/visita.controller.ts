import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Visita } from 'src/visita/models/visita.interface';
import { VisitaService } from 'src/visita/visita.service';

@Controller('visita')
export class VisitaController {
  constructor(private visitaService: VisitaService) {}

  @Get()
  findAll() {
    return this.visitaService.findAll()
  }

  @Get('/all')
  findAllWithRelations() {
    return this.visitaService.findAllWithRelations()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.visitaService.findById(id)
  }

  @Post()
  create(@Body() visita: Visita) {
    return this.visitaService.createVisita(visita)
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() visita: Visita
  ) {
    return this.visitaService.updateVisita(id, visita)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.visitaService.deleteVisita(id)
  }
}
