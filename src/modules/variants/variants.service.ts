import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Variant } from './schemas/variant.schema';
import { CreateVariantDto } from './dto/create-variant.dto/create-variant.dto';

@Injectable()
export class VariantsService {
    constructor(@InjectModel('Variant') private variantModel: Model<Variant>) {}

    async create(createdVariantDto: CreateVariantDto): Promise<Variant> {
        const existingVariant = await this.variantModel.findOne({ variantName: createdVariantDto.variantName }).exec();
        if (existingVariant) {
          throw new Error(`Variant with name "${createdVariantDto.variantName}" already exists`);
        }
        const createdVariant = new this.variantModel(createdVariantDto);
        return createdVariant.save();
      }
      
    
      async findAll(): Promise<Variant[]> {
        return this.variantModel.find().exec();
      }
    
      async findOne(id: string): Promise<Variant> {
        return this.variantModel.findById(id).exec();
      }



}
