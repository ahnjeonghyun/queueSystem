import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userCreator } from './implementations/user-creator';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    BullModule.registerQueue({
      name: 'hassan',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, userCreator],
})
export class UserModule {}