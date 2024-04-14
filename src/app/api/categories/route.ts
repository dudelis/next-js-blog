import prisma from "@/utility/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    const res = new NextResponse(JSON.stringify(categories), {status: 200});
    return res
  } catch (err) {
    const res = new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500});
    return res;
  }
};
