import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuards } from './auth/local-auth.guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuards)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
