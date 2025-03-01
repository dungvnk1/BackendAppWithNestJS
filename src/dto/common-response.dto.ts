import { ApiProperty } from '@nestjs/swagger';

export class CommonResponseDto<T> {
  @ApiProperty({ description: 'Status response', enum: ['SUCCESS', 'FAIL'], example: 'SUCCESS' })
  status: 'SUCCESS' | 'FAIL';

  @ApiProperty({ description: 'Result response', required: false })
  value?: T;

  @ApiProperty({ description: 'Error response', required: false, example: 'Invalid file type' })
  error?: string;
}
