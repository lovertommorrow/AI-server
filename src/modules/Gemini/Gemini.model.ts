import { GenerateContentRequest, Part } from "@google/generative-ai";

export type GenerateContentParam = string | GenerateContentRequest | (string | Part)[]
