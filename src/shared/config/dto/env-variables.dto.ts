import { Transform } from 'class-transformer';
import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Environment } from '../typings/enums/env.enum';

export class EnvironmentVariables {
  @IsEnum(Environment)
  @IsOptional()
  NODE_ENV: Environment;

  @Transform(({ value }) => parseInt(value))
  @IsNumber()
  @IsOptional()
  PORT: number;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  MONGO_URI: string;
}
