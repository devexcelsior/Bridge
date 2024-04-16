import { Controller, Get } from '@nestjs/common';

@Controller('api/customers')
export class CustomersController {
  @Get()
  findAll() {
    // Replace this with your actual data fetching logic
    return [
      { name: 'Customer 1' },
      { name: 'Customer 2' },
      { name: 'Customer 3' },
    ];
  }
}