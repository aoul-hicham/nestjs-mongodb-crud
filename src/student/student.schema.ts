import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  roleName: number;
  @Prop()
  class: number;
  @Prop()
  gender: string;
  @Prop()
  marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
