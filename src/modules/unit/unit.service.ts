/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Unit, UnitDocument } from './schemas/unit.schema';
import { CreateUnitDto } from './dto/create-unit.dto';


@Injectable()
export class UnitService {
  constructor(@InjectModel('unitOfMeasure') private unitModel: Model<UnitDocument>) {}

  async create(createUnitDto: CreateUnitDto): Promise<Unit> {
    const newUnit = new this.unitModel(createUnitDto);
    return newUnit.save();
  }

  async findAll(): Promise<Unit[]> {
    return this.unitModel.find().exec();
  }

  async findOne(id: string): Promise<Unit> {
    const unit = await this.unitModel.findById(id).exec();
    if (!unit) {
      throw new NotFoundException(`Unit #${id} not found`);
    }
    return unit;
  }

  async update(id: string, CreateUnitDto: CreateUnitDto): Promise<Unit> {
    const existingUnit = await this.unitModel.findByIdAndUpdate(id, CreateUnitDto, { new: true }).exec();
    if (!existingUnit) {
      throw new NotFoundException(`Unit #${id} not found`);
    }
    return existingUnit;
  }

  async delete(id: string): Promise<Unit> {
    const unit = await this.unitModel.findByIdAndDelete(id).exec();
    if (!unit) {
      throw new NotFoundException(`Unit #${id} not found`);
    }
    return unit;
  }
}
