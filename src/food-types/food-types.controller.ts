import { Controller, Get, Param } from '@nestjs/common';
import { FoodTypesService } from './food-types.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Food Types')
@Controller('food-types')
export class FoodTypesController {
  constructor(private readonly foodTypesService: FoodTypesService) {}

  @Get()
  findAll() {
    return this.foodTypesService.findAll();
  }

  @Get('/all')
  findAllPopulated() {
    return this.foodTypesService.findAllPopulated();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodTypesService.findOne(id);
  }
}
