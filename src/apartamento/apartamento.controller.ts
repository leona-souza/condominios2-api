import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApartamentoService } from 'src/apartamento/apartamento.service';
import { Apartamento } from 'src/apartamento/models/apartamento.interface';

@Controller('apartamento')
export class ApartamentoController {
  constructor(private apartamentoService: ApartamentoService) {}

  @Get()
  findAll() {
    return this.apartamentoService.findAll()
  }
  
  @Post()
  create(@Body() apartamento: Apartamento) {
    return this.apartamentoService.createApartamento(apartamento)
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() apartamento: Apartamento
  ) {
    return this.apartamentoService.updateApartamento(id, apartamento)
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.apartamentoService.deleteApartamento(id)
  }
}
