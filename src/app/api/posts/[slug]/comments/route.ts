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

export async function POST(
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
