import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FoodType } from 'src/food-types/entities/food-type.entity';

export type FoodDocument = Food & Document;
export enum SpecieTypeEnum {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
  INGREDIENT = 'ingredient',
}

@Schema()
class SpecieItem {
  @Prop({
    type: Boolean,
    default: false,
  })
  selected: boolean;

  @Prop()
  label: string;

  @Prop({ type: Number })
  price: number;

  @Prop()
  imageUrl: string;
}

const SpecieItemSchema = SchemaFactory.createForClass(SpecieItem);

@Schema()
class Specie {
  @Prop()
  label: string;

  @Prop({
    default: SpecieTypeEnum.INGREDIENT,
    type: String,
    enum: SpecieTypeEnum,
  })
  specieType: SpecieTypeEnum;

  @Prop({ type: [SpecieItemSchema], default: [] })
  items: SpecieItem[];
}

const SpecieSchema = SchemaFactory.createForClass(Specie);

@Schema({
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
})
export class Food {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: FoodType.name })
  foodType: FoodType;

  @Prop()
  weight: number;

  @Prop()
  event: string;

  @Prop()
  imageUrl: string;

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop({
    type: [SpecieSchema],
  })
  species: Specie[];
}

export const FoodSchema = SchemaFactory.createForClass(Food);
