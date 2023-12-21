import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';

let teachers = [
  { id: 1, name: 'Ms. Smith', subject: 'Math', age: 35 },
  { id: 2, name: 'Mr. Johnson', subject: 'English', age: 40 },
  { id: 3, name: 'Mrs. Davis', subject: 'Science', age: 38 },
  { id: 4, name: 'Dr. Brown', subject: 'History', age: 45 },
  { id: 5, name: 'Mr. Taylor', subject: 'Computer Science', age: 32 },
  { id: 6, name: 'Mrs. Robinson', subject: 'Art', age: 37 },
  { id: 7, name: 'Mr. White', subject: 'Physical Education', age: 42 },
  { id: 8, name: 'Ms. Garcia', subject: 'Spanish', age: 33 },
  { id: 9, name: 'Mr. Lee', subject: 'Music', age: 39 },
  { id: 10, name: 'Dr. Patel', subject: 'Chemistry', age: 36 },
];

@Controller('teachers')
export class TeachersController {
  @Get()
  findAll(@Res() res) {
    console.log('at /teachers -> get');
    res.send(teachers);
  }
  @Get(':id')
  findOne(@Param('id') id) {
    console.log('at /teachers/:id -> get');
    let foundTeacher = teachers.find((teacher) => teacher.id == id);
    return foundTeacher;
  }
  @Post()
  create(@Body() newTeacher) {
    console.log('at /teachers -> post');
    teachers.push({
      id: teachers.length + 1,
      ...newTeacher,
    });
    return 'New teacher successfully added in the database.';
  }
  @Delete(':id')
  remove(@Param('id') id) {
    teachers = teachers.filter((teacher) => teacher.id != id);
    return `Teacher with ID ${id} deleted from the database.`;
  }
}
