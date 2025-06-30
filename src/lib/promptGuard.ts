import axios from "axios";

const PICA_SECRET_KEY = import.meta.env.VITE_PICA_SECRET_KEY;
const PICA_GEMINI_CONNECTION_KEY = import.meta.env.VITE_PICA_GEMINI_CONNECTION_KEY;
const PICA_GEMINI_ACTION_ID = "conn_mod_def::GCmd5BQE388::PISTzTbvRSqXx0N0rMa-Lw";

export async function promptGuard(promptText: string) {
  console.log("PromptGuard (Pica Gemini) triggered with prompt:", promptText);
  console.log("PICA_SECRET_KEY present:", !!PICA_SECRET_KEY);
  console.log("PICA_GEMINI_CONNECTION_KEY present:", !!PICA_GEMINI_CONNECTION_KEY);

  try {
    const response = await axios.post(
      "https://api.picaos.com/v1/passthrough/models/gemini-1.5-flash:generateContent",
      {
        contents: [
          {
            parts: [
              { text: `You are an AI content safety filter. Analyze the following prompt for risks such as offensive language, sensitive data leakage, security vulnerabilities, or inappropriate content. Respond only in JSON format:\n{\n  "risk_level": "Low | Medium | High",\n  "reason": "Concise human-readable explanation of detected risks"\n}\nPrompt to analyze:\n${promptText}` }
            ]
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-pica-secret": PICA_SECRET_KEY,
          "x-pica-connection-key": PICA_GEMINI_CONNECTION_KEY,
          "x-pica-action-id": PICA_GEMINI_ACTION_ID
        }
      }
    );

    const textResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    console.log("Pica Gemini raw output:", textResponse);

    const parsed = JSON.parse(textResponse);

    if (parsed?.risk_level && parsed?.reason) {
      return { risk_level: parsed.risk_level, reason: parsed.reason };
    } else {
      throw new Error("Invalid JSON structure from Gemini response");
    }
  } catch (error) {
    console.error("PromptGuard (Pica Gemini) Error:", error);
    return { risk_level: "Error", reason: "Failed to analyze prompt." };
  }
}
