import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  controllers: [UploadController],
  providers: [],
})
export class UploadModule {}