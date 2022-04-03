import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Morador } from 'src/morador/models/morador.interface';
import { MoradorService } from 'src/morador/morador.service';

@Controller('morador')
export class MoradorController {
  constructor(private moradorService: MoradorService) {}

  @Get()
  findAll() {
    return this.moradorService.findAll()
  }

  @Get('/all')
  findAllWithRelations() {
    return this.moradorService.findAllWithRelations()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.moradorService.findById(id)
  }

  @Post()
  create(@Body() morador: Morador) {
    return this.moradorService.createMorador(morador)
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() morador: Morador
  ) {
    return this.moradorService.updateMorador(id, morador)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.moradorService.deleteMorador(id)
  }
}
