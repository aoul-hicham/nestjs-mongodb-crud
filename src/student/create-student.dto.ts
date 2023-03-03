import { IsString } from 'class-validator';
import { IsNotEmpty, IsNumber, MaxLength } from 'class-validator/types/decorator/decorators';

export class CreateStudentDTO {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly roleName: number;

  @IsNumber()
  @IsNotEmpty()
  readonly class: number;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;

  @IsNumber()
  @IsNotEmpty()
  readonly marks: number;
}
