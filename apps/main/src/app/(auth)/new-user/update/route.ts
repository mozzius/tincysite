import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

import { db } from "~/lib/db";
import { getCurrentUser } from "~/lib/session";

const schema = z.object({
  name: z.string().min(1).max(100),
  image: z.string().optional(),
});

export const PATCH = async (req: NextRequest) => {
  const user = await getCurrentUser(false, () => {
    throw Error("unauthorized");
  });

  const { name, image } = schema.parse(await req.json());

  await db.user.update({
    where: { id: user.id },
    data: {
      name,
      image,
    },
  });

  return NextResponse.json({});
};
