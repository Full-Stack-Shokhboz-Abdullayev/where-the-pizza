import { Controller, Get, Param } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('foods')
@ApiTags('Foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodsService.findOne(id);
  }
}
