import prisma from "@/utility/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const post = await prisma.post.findFirst({
      where: {
        isFeatured: true
      },
      orderBy: {
        updatedAt: "desc"
      }
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
