import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GeminiService } from './modules/Gemini/Gemini.service';
import { GenerateContentParam } from './modules/Gemini/Gemini.model';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private geminiService: GeminiService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    const prompt = 'Write a story about a magic backpack.';

    const result = await this.geminiService
      .getDefaultModel()
      .generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return text;
  }
  @Post('/rest/generative')
  async getGenContent(
    @Body() body: { modelName: string; modelBody: GenerateContentParam },
  ): Promise<string> {
    console.log("body: ",body.modelName,body.modelBody)
    const result = await this.geminiService.getGenContent(body);
    console.log("result: ", result)
    return result;
  }
}