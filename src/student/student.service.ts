import { UpdateStudentDTO } from './update-student.dto';
import { CreateStudentDTO } from './create-student.dto';
import { IStudent } from './student.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundException, Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<IStudent>) {}

  // Create Student
  async createStudent(student: CreateStudentDTO) {
    const newStudent = await new this.studentModel(student);
    return newStudent.save();
  }

  // Update Student
  async updateSTudent(studentId: number, student: UpdateStudentDTO) {
    const existingStudent = await this.studentModel.findByIdAndUpdate(studentId, student, {
      new: true,
    });

    if (!existingStudent)
      throw new NotFoundException(['Yuu are trying to update a non existing student  !']);

    return existingStudent;
  }

  // Find all students
  async findAllStudents() {
    const students = await this.studentModel.find();

    if (!students) throw new NotFoundException(['No student found']);

    return students;
  }

  // Find one student
  async findStudent(studentId: string) {
    const student = await this.studentModel.findById(studentId).exec();

    if (!student) throw new NotFoundException([`There is no student with id ${studentId}`]);

    return student;
  }

  // Delete Student
  async deleteStudent(studentId: string) {
    const studentDeleted = await this.studentModel.findByIdAndDelete(studentId);

    if (!studentDeleted) throw new NotFoundException([`There is no student with id ${studentId}`]);

    return studentDeleted;
  }
}
