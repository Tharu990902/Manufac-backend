import { Body, Controller, Get, Post } from '@nestjs/common';
import { RawMaterialsService } from './raw-materials.service';
import { RawMaterial } from './schemas/raw-material.schema';

@Controller('raw-materials')
export class RawMaterialsController {
  constructor(private readonly rawMaterialsService: RawMaterialsService) {}

  @Post()
  async create(@Body() rawMaterial: RawMaterial): Promise<RawMaterial> {
    return await this.rawMaterialsService.create(rawMaterial);
  }


  @Get() 
  async findAll(): Promise<RawMaterial[]> {
    return await this.rawMaterialsService.findAll();
  }


}
