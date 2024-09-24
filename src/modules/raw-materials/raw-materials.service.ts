/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RawMaterial } from './schemas/raw-material.schema';
import { Model } from 'mongoose';
import { CreateRawMaterialDto } from './dto/create-raw-material.dto/create-raw-material.dto';


@Injectable()
export class RawMaterialsService {

    constructor(@InjectModel('RawMaterial') private readonly rawMaterialModel: Model<RawMaterial>) {}
 
    async create(createRawMaterialDto: CreateRawMaterialDto): Promise<RawMaterial> {
        const newRawMaterial = new this.rawMaterialModel(createRawMaterialDto);
        return await newRawMaterial.save(); 
      } 


    async findAll(): Promise<RawMaterial[]> { 
     
      const result = await this.rawMaterialModel.find().exec();

      return result;
      } 
}
