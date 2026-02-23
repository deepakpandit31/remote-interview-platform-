import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    let output = "";

    const originalLog = console.log;
    console.log = (...args) => {
      output += args.join(" ") + "\n";
    };

    try {
      // Execute JS code
      new Function(code)();
    } catch (err: any) {
      output += err.message;
    }

    console.log = originalLog;

    return NextResponse.json({ output });
  } catch {
    return NextResponse.json(
      { output: "Execution failed" },
      { status: 500 }
    );
  }
}