import { Body, Controller, Post } from '@nestjs/common';
import { createDto } from './DTO/create-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() data: createDto): Promise<void> {
    const user = await this.userService.create(data);

    return user;
  }
}
