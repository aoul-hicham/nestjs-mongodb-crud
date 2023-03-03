import { CreateStudentDTO } from './create-student.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStudentDTO extends PartialType(CreateStudentDTO) {}
