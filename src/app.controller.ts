import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {
  

  @Get()
  getHello(): string {
    return "Hello World!";
  }

  @Get('user')
  getUser() {
    return "Heloo Smradina!";
  }
}