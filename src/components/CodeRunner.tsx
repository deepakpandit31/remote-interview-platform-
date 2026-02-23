"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CodeRunner({ code }: { code: string }) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: "javascript",
        code,
      }),
    });

    const data = await res.json();

    setOutput(
      data.stdout ||
      data.stderr ||
      data.compile_output ||
      "No output"
    );
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <Button onClick={runCode} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </Button>

      <pre className="bg-black text-green-400 p-4 rounded-md min-h-[100px]">
        {output}
      </pre>
    </div>
  );
}