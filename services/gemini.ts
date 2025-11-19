import { GoogleGenAI, ChatSession, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: ChatSession | null = null;

export const initChat = async (): Promise<ChatSession> => {
  if (chatSession) return chatSession;

  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessage = async (message: string): Promise<string> => {
  try {
    const session = await initChat();
    const response: GenerateContentResponse = await session.sendMessage({ message });
    return response.text || "I'm thinking...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be disconnected from the neural link. Please try again later.";
  }
};
