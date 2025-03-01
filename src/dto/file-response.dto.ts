import { ApiProperty } from '@nestjs/swagger';

export class FileResponseDto {
  @ApiProperty({ description: 'Tên file được lưu trên server', example: '1631234567890-file.png' })
  filename: string;

  @ApiProperty({ description: 'Tên file gốc được upload', example: 'image.png' })
  originalName: string;
}