import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const CONFIG_PATH = path.join(process.cwd(), "public", "config.json");

export async function GET() {
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json(
      { whatsappNumber: "", whatsappMessage: "" },
      { status: 200 }
    );
  }
}

export async function POST(req: NextRequest) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json({ error: "Admin password not configured" }, { status: 500 });
  }

  const authHeader = req.headers.get("x-admin-password") || "";
  if (authHeader !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const config = {
      whatsappNumber: String(body.whatsappNumber || ""),
      whatsappMessage: String(body.whatsappMessage || ""),
    };
    await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
    return NextResponse.json({ success: true, config });
  } catch {
    return NextResponse.json({ error: "Failed to save config" }, { status: 500 });
  }
}
