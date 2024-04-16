import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll(): Customer[] {
    return this.customersService.getAllCustomers();
  }
  
  @Post()
  addCustomer(@Body() customerData: Partial<Customer>): { id: number } {
    const { id: generatedId } = this.customersService.insertCustomer(customerData);
    return { id: generatedId };
  }

  // Other controller methods...
}