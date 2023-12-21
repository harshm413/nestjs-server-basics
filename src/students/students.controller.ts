import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';

let students = [
  { id: 1, name: 'Alice', age: 20, grade: 'A' },
  { id: 2, name: 'Bob', age: 22, grade: 'B' },
  { id: 3, name: 'Charlie', age: 21, grade: 'C' },
  { id: 4, name: 'David', age: 23, grade: 'B' },
  { id: 5, name: 'Eva', age: 19, grade: 'A' },
  { id: 6, name: 'Frank', age: 24, grade: 'C' },
  { id: 7, name: 'Grace', age: 20, grade: 'A' },
  { id: 8, name: 'Henry', age: 22, grade: 'B' },
  { id: 9, name: 'Ivy', age: 21, grade: 'C' },
  { id: 10, name: 'Jack', age: 23, grade: 'A' },
];

@Controller('students')
export class StudentsController {
  @Get()
  findAll(@Res() res) {
    console.log('at /students -> get');
    res.send(students);
  }
  @Get(':id')
  findOne(@Param('id') id) {
    console.log('at /students/:id -> get');
    let foundStudent = students.find((student) => student.id == id);
    return foundStudent;
  }
  @Post()
  create(@Body() newStudent) {
    console.log('at /students -> post');
    students.push({
      id: students.length + 1,
      ...newStudent,
    });
    return 'New student successfully added in the database.';
  }
  @Delete(':id')
  remove(@Param('id') id) {
    students = students.filter((student) => student.id != id);
    return `Student with ID ${id} deleted from the database.`;
  }
}
