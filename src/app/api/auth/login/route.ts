import { userService } from "@/features/users/services/user.service";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await userService.getAllUsers();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  console.log("POST /api/auth/login");
  const data = await req.json();
  console.log(data);
  const newUser = await userService.createUser(data);
  return NextResponse.json(newUser, { status: 201 });
}
//src\app\api\auth\login\route.ts
