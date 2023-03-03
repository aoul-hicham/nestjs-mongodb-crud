import { StudentService } from './student.service';
import { StudentSchema } from './student.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [],
  providers: [StudentService],
})
export class StudentModule {}
