import prisma from "@/utility/prismaClient";
import { Category } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: params.slug,
      },
    });
    return Response.json(category, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
