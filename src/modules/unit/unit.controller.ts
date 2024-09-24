/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UnitService } from './unit.service';
import { CreateUnitDto } from './dto/create-unit.dto';


@Controller('unitOfMeasure')
export class UnitController {
  constructor(private readonly unitService: UnitService) {}

  @Post()
  async create(@Body() createUnitDto: CreateUnitDto) {
    return this.unitService.create(createUnitDto);
  }

  @Get()
  async findAll() {
    return this.unitService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.unitService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() CreateUnitDto: CreateUnitDto) {
    return this.unitService.update(id, CreateUnitDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.unitService.delete(id);
  }
}
