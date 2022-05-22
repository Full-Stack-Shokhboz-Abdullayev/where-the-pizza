import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Food } from 'src/foods/entities/food.entity';

export type ComboDocument = Combo & Document;

@Schema()
export class Combo {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  foods: Food[];
}

export const ComboSchema = SchemaFactory.createForClass(Combo);
