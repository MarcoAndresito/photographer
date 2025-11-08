import { NextResponse } from "next/server";
import { getSequelize } from "@/db/config/database";

export async function GET() {
  try {
    const sequelize = await getSequelize();
    await sequelize.authenticate();

    return NextResponse.json({
      status: "ok",
      message: "Database connection established ✅",
      db: process.env.DB_NAME,
      host: process.env.DB_HOST,
      env: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed ❌",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
