import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    console.log('at / -> get');
    return `At the Homepage.`;
  }
  @Get('/query')
  getQuery(@Query() message) {
    console.log('at /query -> get');
    return `Demonstrating query. ${JSON.stringify(message)}`;
  }
  @Post('/urlencoded')
  atUrlEncoded(@Body() message) {
    console.log('at /urlencoded -> post');
    return `Demonstrating urlencoding. ${JSON.stringify(message)}`;
  }
}
