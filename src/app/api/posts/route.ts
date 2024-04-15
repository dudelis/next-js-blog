import prisma from "@/utility/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest ) => {
  const page = req.nextUrl.searchParams.get("page") || "1";

  const POST_PER_PAGE = 3;
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany({
        take: POST_PER_PAGE,
        skip: (parseInt(page) - 1) * POST_PER_PAGE,
        orderBy: {
          createdAt: "desc",
        },
        include: {
          category: true,
        },
      }),
      prisma.post.count(),
    ]);
    
    const res = new NextResponse(JSON.stringify({posts, count, POST_PER_PAGE}), {status: 200});
    return res
  } catch (err) {
    const res = new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500});
    return res;
  }
};
