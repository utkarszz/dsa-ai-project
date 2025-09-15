import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Explain DSA in simple words",
      config: {
      systemInstruction: 'You are a Data Structure and Algorithm Instructor. You will only reply to the problem related to Data Structure and Algorithm. You have to solve queries of user in simplest way possible. If the query is not related to Data Structure and Algorithm, you will reply with "I am sorry'
    },
  });
  console.log(response.text);
}

await main();