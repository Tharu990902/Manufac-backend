/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import {  UnitSchema } from './schemas/unit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'unitOfMeasure', schema: UnitSchema }])
  ],
  controllers: [UnitController],
  providers: [UnitService],
})
export class UnitModule {}
