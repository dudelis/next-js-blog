import { getAuthSession } from "@/utility/auth";
import prisma from "@/utility/prismaClient";

//Get all comments for a post
export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const comments = await prisma.comments.findMany({
      where: {
        post: {
          slug: params.slug,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return Response.json(comments, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

//create a comment
export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const session = await getAuthSession();
  if (!session) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const comment = await prisma.comments.create({data:{
    ...body, userEmail: session.user?.email
  }});
  try {
    const comments = await prisma.comments.findMany({
      where: {
        post: {
          slug: params.slug,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    return Response.json(comments, { status: 200 });
  } catch (err) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
