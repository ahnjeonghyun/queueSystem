import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { userCreator } from './implementations/user-creator';

@Processor('hassan')
export class UserConsumer {
  constructor(private readonly userCreator: userCreator) {}

  @Process('userCreate')
  async creatUser(job: Job) {
    try {
      console.log(job);
      await this.userCreator.create(job.data)

    } catch (error) {
        console.info(error);
      }
    }
  }