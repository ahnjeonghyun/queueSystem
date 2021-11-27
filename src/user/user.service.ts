import { Injectable } from '@nestjs/common';
import { createDto } from './DTO/create-dto';
import { userCreator } from './implementations/user-creator';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userCreator: userCreator) {}

  async create(data: createDto): Promise<void> {
    return await this.userCreator.create(data);
  }
}
