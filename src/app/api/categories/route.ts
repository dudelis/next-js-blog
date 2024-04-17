import prisma from "@/utility/prismaClient";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const cat = req.nextUrl.searchParams.get("cat") || "";

    const categories = await prisma.category.findMany();
    const res = new NextResponse(JSON.stringify(categories), {status: 200});
    return res
  } catch (err) {
    const res = new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500});
    return res;
  }
};

// export const GETITEM = async (req: NextApiRequest) => {
//   try {
//     const category = await prisma.category.findUnique({
//       where: {
//         slug: req.query.cat as string
//       }
//     });
//     const res = new NextResponse(JSON.stringify(category), {status: 200});
//     return res
//   } catch (err) {
//     const res = new NextResponse(JSON.stringify({message: "Something went wrong"}), {status: 500});
//     return res;
//   }
// }