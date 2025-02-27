import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';

@Controller('customers')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Post()
  async create(@Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customerService.create(customerData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() customerData: Partial<Customer>,
  ): Promise<Customer> {
    return this.customerService.update(id, customerData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.customerService.remove(id);
  }
}
