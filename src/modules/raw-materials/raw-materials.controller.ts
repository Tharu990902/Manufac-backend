/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterial } from './schemas/raw-material.schema';
import { v4 as uuidv4 } from 'uuid'; // Import UUID generator
import { CreateRawMaterialDto } from './dto/create-raw-material.dto/create-raw-material.dto';

@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  async create(@Body() rawMaterialDto: CreateRawMaterialDto): Promise<RawMaterial> {
    return await this.rawMaterialsService.create(rawMaterialDto);
  } 

  @Get() 
  async findAll(): Promise<RawMaterial[]> { 
    const result = await this.rawMaterialsService.findAll();
    return result;

  }

}
