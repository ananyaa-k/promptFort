import React, { useState } from "react";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoginForm } from "./components/auth/LoginForm";
import { Layout } from "./components/layout/Layout";
import { supabase } from "./lib/supabase";
import { promptGuard } from "./lib/promptGuard";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<{ risk_level: string; reason: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);
    const analysis = await promptGuard(prompt);

    // Save to database
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

    setResult(analysis);
    setLoading(false);
  };

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <Layout>
      <div className="p-6 max-w-xl mx-auto space-y-4">
        <h2 className="text-xl font-bold">Prompt Risk Analyzer</h2>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full p-2 border rounded resize-none h-32"
        />
        <Button onClick={handleAnalyze} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze Prompt"}
        </Button>
        {result && (
          <Card className="p-4 mt-4">
            <p>
              <strong>Risk Level:</strong> {result.risk_level}
            </p>
            <p>
              <strong>Reason:</strong> {result.reason}
            </p>
          </Card>
        )}
      </div>
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
