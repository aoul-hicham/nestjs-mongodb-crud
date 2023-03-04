import { UpdateStudentDTO } from './update-student.dto';
import { StudentService } from './student.service';
import { CreateStudentDTO } from './create-student.dto';
import { Controller, Res, Body, Post, Put, Get, Delete, HttpStatus, Param } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Create student
  @Post('create')
  async createStudent(@Res() response, @Body() createStudentDto: CreateStudentDTO) {
    try {
      const student = await this.studentService.createStudent(createStudentDto);

      return response.status(HttpStatus.CREATED).json({
        message: 'Student has been created successfully !',
        student: student,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'Unable to create student',
        statusCode: 400,
        error: 'Bad Request',
      });
    }
  }

  // Update student
  @Put('update/:id')
  async updateStudent(@Res() response, studentId: number, updateStudentDto: UpdateStudentDTO) {
    try {
      const updatedStudent = await this.studentService.updateStudent(studentId, updateStudentDto);

      return response.status(HttpStatus.OK).json({
        message: 'Student updated successfully',
        student: updatedStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  // Find all students
  @Get('all')
  async getStudents(@Res() response) {
    try {
      const students = await this.studentService.findAllStudents();

      return response.status(HttpStatus.OK).json({
        data: students,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  // Delete student
  @Delete('delete/:id')
  async deleteStudent(@Res() response, @Param('id') studentId: string) {
    try {
      const deletedStudent = await this.studentService.deleteStudent(studentId);

      return response.status(HttpStatus.OK).json({
        message: 'Student has been deleted successfully',
        deletedStudent,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
