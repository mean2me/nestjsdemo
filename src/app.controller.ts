import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UserDto } from './users/dto/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users/user/:id')
  async getUser(@Param('id') id: string): Promise<UserDto> {}
}
