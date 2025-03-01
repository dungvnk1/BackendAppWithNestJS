import { Controller, Post, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommonResponseDto } from '../dto/common-response.dto';
import { FileResponseDto } from '../dto/file-response.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  @ApiOperation({ summary: 'Upload file' })
  @ApiConsumes('multipart/form-data')
  @ApiResponse({ 
    status: 200,
    description: 'File uploaded successfully', 
    type: CommonResponseDto<FileResponseDto> 
  })
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<CommonResponseDto<FileResponseDto>> {
    try {
      return {
        status: 'SUCCESS',
        value: {
          filename: file.filename,
          originalName: file.originalname,
        },
      };
    } catch (error) {
      return {
        status: 'FAIL',
        error: error.message,
      };
    }
  }
}