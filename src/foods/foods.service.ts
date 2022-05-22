import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(@InjectModel(Food.name) private FoodModel: Model<Food>) {}
  findOne(id: string) {
    return this.FoodModel.findOne({ id });
  }
}
