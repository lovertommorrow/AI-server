import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GenerateContentParam } from './Gemini.model';
@Injectable()
export class GeminiService {
  private genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  getModel(modelName: string) {
    const model = this.genAI.getGenerativeModel({ model: modelName });
    return model;
  }
  getDefaultModel() {
    return this.getModel('gemini-pro');
  }
  async getGenContent(body: {
    modelName: string;
    modelBody: GenerateContentParam;
  }): Promise<string> {
    const model = body.modelName
      ? this.getModel(body.modelName)
      : this.getDefaultModel();
    const modelBody = body.modelBody || 'Write a story about a magic backpack.';
    const result = await model.generateContent(modelBody);
    const response = result.response;
    const text = response.text();
    return text;
  }
}