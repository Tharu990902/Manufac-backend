import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RawMaterialDocument = HydratedDocument<RawMaterial>;


@Schema()
export class RawMaterial {
  
  @Prop({ required: true })
  materialName: string;

  @Prop({ required: true, unique: true })
  materialCode: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  unitOfMeasure: string;

  @Prop({ type: Number, default: 0 })
  reorderLevel?: number;

  @Prop({ type: String, default: '' })
  description?: string;
 
  @Prop({ required: true, default: false })
  hasVariants: boolean;
}

export const RawMaterialSchema = SchemaFactory.createForClass(RawMaterial);