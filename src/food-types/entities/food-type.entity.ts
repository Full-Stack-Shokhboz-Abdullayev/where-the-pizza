import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodTypeDocument = FoodType & Document;

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class FoodType {
  @Prop()
  title: string;

  @Prop()
  label: string;
}

export const FoodTypeSchema = SchemaFactory.createForClass(FoodType);

FoodTypeSchema.virtual('foods', {
  ref: 'Food',
  localField: '_id',
  foreignField: 'foodType',
  justOne: false,
});
