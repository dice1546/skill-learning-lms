import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    console.log("[API] Authenticated user:", userId);

    const { title } = await req.json();
    console.log("[API] Received title:", title);

    if (!userId) {
      console.warn("[API] Missing userId, unauthorized access");
      console.log("[API] Missing userId, unauthorized access");
      return new NextResponse("Unauthorized, API Missing UserId", { status: 401 });
    }

    if (!isTeacher()) {
      console.warn("[API] User is not a teacher:", { userId });
      console.log("[API] User is not a teacher");
      return new NextResponse("Unauthorized API is not a Teacher", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });
    console.log("[API] Course created successfully:", course);

    return NextResponse.json(course);
  } catch (error) {
    console.error("[API] Internal server error:", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
