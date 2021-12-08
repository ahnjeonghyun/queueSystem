import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Job } from 'bull';

@Injectable()
export class userCreator {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
  ) {}

  async create(job: Job): Promise<void> {
    const { nickname, password, email } = job.data;

    await this.userEntityRepository.insert({
      nickname,
      email,
      password,
    });

    return;
  }
}
