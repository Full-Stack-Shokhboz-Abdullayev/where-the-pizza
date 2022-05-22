import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FoodType } from './entities/food-type.entity';

@Injectable()
export class FoodTypesService {
  constructor(
    @InjectModel(FoodType.name) private FoodTypeModel: Model<FoodType>,
  ) {}
  findAll() {
    return this.FoodTypeModel.find();
  }

  findAllPopulated() {
    return this.FoodTypeModel.find().populate('foods');
  }

  findOne(id: string) {
    return this.FoodTypeModel.findOne({
      _id: id,
    }).populate('foods');
  }
}
