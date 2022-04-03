import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Veiculo } from 'src/veiculo/models/veiculo.interface';
import { VeiculoService } from 'src/veiculo/veiculo.service';

@Controller('veiculo')
export class VeiculoController {
  constructor(private veiculoService: VeiculoService) {}

  @Get()
  findAll() {
    return this.veiculoService.findAll()
  }

  @Get('/all')
  findAllWithRelations() {
    return this.veiculoService.findAllWithRelations()
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.veiculoService.findById(id)
  }

  @Post()
  create(@Body() morador: Veiculo) {
    return this.veiculoService.createMorador(morador)
  }

  @Put('/:id')
  update(
    @Param('id') id: number,
    @Body() morador: Veiculo
  ) {
    return this.veiculoService.updateMorador(id, morador)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.veiculoService.deleteMorador(id)
  }
}
