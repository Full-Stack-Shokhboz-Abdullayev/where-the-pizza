import { Module } from '@nestjs/common';
import { FoodTypesService } from './food-types.service';
import { FoodTypesController } from './food-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodType, FoodTypeSchema } from './entities/food-type.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FoodType.name,
        schema: FoodTypeSchema,
      },
    ]),
  ],
  controllers: [FoodTypesController],
  providers: [FoodTypesService],
  exports: [MongooseModule],
})
export class FoodTypesModule {}
