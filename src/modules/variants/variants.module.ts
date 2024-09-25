/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VariantSchema } from './schemas/variant.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Variant', schema: VariantSchema }])],
  controllers: [VariantsController],
  providers: [VariantsService],
})
export class VariantsModule {}
 