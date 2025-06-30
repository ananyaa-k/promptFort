import { useState } from "react";
import { promptGuard } from "../../lib/promptGuard";
import { supabase } from "../../lib/supabase";

export const AdminTestPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ risk_level: string; reason: string } | null>(null);

  const handleAnalyze = async () => {
    if (!prompt) return;
    setLoading(true);

    const analysis = await promptGuard(prompt);
    console.log("Analysis result:", analysis);

    if (analysis.risk_level !== "Error") {
      const { error } = await supabase.from("prompts").insert([
        {
          prompt_text: prompt,
          risk_level: analysis.risk_level,
          reason: analysis.reason,
        },
      ]);

      if (error) {
        console.error("Supabase Insert Error:", error);
      }
    }

    setResult(analysis);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Admin Test Prompt</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-3 border rounded bg-white text-black"
        rows={4}
        placeholder="Enter prompt to analyze"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        {loading ? "Analyzing..." : "Analyze & Log Prompt"}
      </button>

      {result && (
        <div className="p-4 mt-4 border rounded bg-gray-800 text-white">
          <p>
            <strong>Risk Level:</strong> {result.risk_level}
          </p>
          <p>
            <strong>Reason:</strong> {result.reason}
          </p>
        </div>
      )}
    </div>
  );
};
