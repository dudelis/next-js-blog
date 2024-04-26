import { getAllPosts } from "@/lib/posts";
// import { getAuthSession } from "@/utility/auth";
// import prisma from "@/utility/prismaClient";
// import { Prisma } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const page = req.nextUrl.searchParams.get("page") || "1";
  const cat = req.nextUrl.searchParams.get("cat") || "";
  const POST_PER_PAGE = 3;
  try {
    const allPosts = getAllPosts();
    const count = allPosts.length;
    const skip = (parseInt(page) - 1) * POST_PER_PAGE;
    const filteredPosts = allPosts.filter((post) => {
      return post.category === cat || cat === "";
    });
    const posts = filteredPosts.slice(skip, skip + POST_PER_PAGE);
    const res = new NextResponse(
      JSON.stringify({ posts, count, POST_PER_PAGE }),
      { status: 200 }
    );
    return res;
  } catch (err) {
    const res = new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
    return res;
  }
};
