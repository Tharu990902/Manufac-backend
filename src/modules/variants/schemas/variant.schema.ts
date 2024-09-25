/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Variant extends Document {
  @Prop({ required: true })
  variantName: string;

  @Prop([
    {
      value: { type: String, required: true },
      shortName: { type: String, required: true },
    },
  ])
  values: Array<{ value: string; shortName: string }>;
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
