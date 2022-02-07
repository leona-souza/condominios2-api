import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApartamentoService } from 'src/apartamento/apartamento.service';
import { Apartamento } from 'src/apartamento/models/apartamento.interface';

@Controller('apartamento')
export class ApartamentoController {
  constructor(private apartamentoService: ApartamentoService) {}

  @Get()
  getAll() {
    return this.apartamentoService.findAll()
  }
  
  @Post()
  create(@Body() apartamento: Apartamento) {
    return this.apartamentoService.createApartamento(apartamento)
  }
}
