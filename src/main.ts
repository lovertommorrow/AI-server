import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import { setGlobalProxyForGeminiApi } from './proxy';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.use(json({limit:'50mb'}));
  await app.listen(3000);
}
// if can not access gemini，need set proxy
setGlobalProxyForGeminiApi();
bootstrap();
