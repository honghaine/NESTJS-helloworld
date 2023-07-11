/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    return {
      username: 'test',
      password: 'test'
    }
  } 
}
