import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { Variant } from './schemas/variant.schema';
import { CreateVariantDto } from './dto/create-variant.dto/create-variant.dto';

@Controller('variants')
export class VariantsController {
  constructor(private readonly variantsService: VariantsService) {}

  @Post()
  async create(@Body() createVariantDto: CreateVariantDto): Promise<Variant> {
    return this.variantsService.create(createVariantDto);
  }

  @Get()
  async findAll() {
    return this.variantsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.variantsService.findOne(id);
  }

  
}
