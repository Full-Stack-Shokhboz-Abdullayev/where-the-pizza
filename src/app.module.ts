import { Module } from '@nestjs/common';
import { FoodsModule } from './foods/foods.module';
import { CombosModule } from './combos/combos.module';
import { ConfigurationModule } from './shared/config/configuration.module';
import { FoodTypesModule } from './food-types/food-types.module';
import { getModelToken } from '@nestjs/mongoose';
import { AdminModule } from '@adminjs/nestjs';
import { Food } from './foods/entities/food.entity';
import { Model } from 'mongoose';
import { Database, Resource } from '@adminjs/mongoose';
import AdminJs from 'adminjs';
import { FoodType } from './food-types/entities/food-type.entity';

AdminJs.registerAdapter({ Database, Resource });
@Module({
  imports: [
    AdminModule.createAdminAsync({
      imports: [FoodsModule, FoodTypesModule],
      inject: [getModelToken(Food.name), getModelToken(FoodType.name)],
      useFactory: (foodModel: Model<Food>, foodTypeModel: Model<FoodType>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            { resource: foodModel },
            {
              resource: foodTypeModel,
            },
          ],
        },
      }),
    }),
    ConfigurationModule,
    FoodsModule,
    CombosModule,
    FoodTypesModule,
  ],
})
export class AppModule {}
