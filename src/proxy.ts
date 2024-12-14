import { setGlobalDispatcher, ProxyAgent } from 'undici';

export function setGlobalProxyForGeminiApi() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  const dispatcher = new ProxyAgent({ uri: process.env.GEMINI_API_PROXY });
  setGlobalDispatcher(dispatcher);
}