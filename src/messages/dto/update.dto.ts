import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { CanBeUndefined } from '../../common/decorators';

export class UpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @CanBeUndefined()
  @IsString()
  @Length(2, 32)
  name?: string;

  @CanBeUndefined()
  @IsString()
  text?: string;
}
