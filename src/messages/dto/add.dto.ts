import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AddDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 32)
  name: string;

  @IsNotEmpty()
  @IsString()
  text: string;
}
