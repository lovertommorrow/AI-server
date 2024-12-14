import { Module } from '@nestjs/common';
import { GeminiService } from './Gemini.service';

@Module({
  providers: [GeminiService],
  exports: [GeminiService],
})
export class GeminiModule {}