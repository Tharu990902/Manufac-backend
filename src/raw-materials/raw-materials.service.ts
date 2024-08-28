import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RawMaterial } from './schemas/raw-material.schema';
import { Model } from 'mongoose';

@Injectable()
export class RawMaterialsService {

    constructor(@InjectModel('RawMaterial') private readonly rawMaterialModel: Model<RawMaterial>) {}
 
    async create(rawMaterial: RawMaterial): Promise<RawMaterial> {
        const newRawMaterial = new this.rawMaterialModel(rawMaterial);
        return await newRawMaterial.save(); 
      } 


    async findAll(): Promise<RawMaterial[]> {
        return await this.rawMaterialModel.find().exec();
      }
}
