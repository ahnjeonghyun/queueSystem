import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { createDto } from '../DTO/create-dto';

@Injectable()
export class userCreator {
  constructor(
    @InjectRepository(UserEntity)
    private userEntityRepository: Repository<UserEntity>,
  ) {}

  async create(data: createDto): Promise<void> {
    const { nickname, password, email } = data;

    await this.userEntityRepository.insert({
      nickname,
      email,
      password,
    });

    return;
  }
}
