import { Injectable } from '@nestjs/common';
import { createDto } from './DTO/create-dto';
import { userCreator } from './implementations/user-creator';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(
    private userCreator: userCreator,
    @InjectQueue('hassan') private testQueue: Queue,
  ) {}

  async create(data: createDto): Promise<void> {
    const job = await this.testQueue.add('userCreate', data);
  }
}