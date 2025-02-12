import { Injectable } from '@nestjs/common';
import { UpdateCompanyDto } from '../dtos/update-company.sto';
import { CompanyRepository } from '../repository/company-repository';

@Injectable()
export class UpdateCompanyService {
  constructor(private companyRepository: CompanyRepository) {}

  async execute(id: string, data: UpdateCompanyDto) {
    const companyExists = await this.companyRepository.findCompanyById(id);

    if (!companyExists) {
      return {
        status: 404,
        data: {
          message: 'Company not found',
        },
      };
    }

    await this.companyRepository.UpdateCompanyById(id, data);

    return {
      status: 204,
      data: {
        message: 'Company updated successfully',
      },
    };
  }
}
