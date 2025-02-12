import { BadRequestException, Injectable } from '@nestjs/common';
import { JobRepository } from './../repository/job.resository';

@Injectable()
export class DeleteJobService {
  constructor(private jobRepository: JobRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new BadRequestException('Id not provided');
    }

    const jobExists = await this.jobRepository.findOneById(id);

    if (!jobExists) {
      throw new BadRequestException('Job not found');
    }

    return this.jobRepository.deleteJobById(id);
  }
}
