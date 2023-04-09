import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@tincy/db";

import { getCurrentUser } from "~/lib/session";

const schema = z.object({
  name: z.string(),
  url: z.string(),
});

export async function POST(req: NextRequest) {
  const user = await getCurrentUser(false);

  console.log(req.body);

  const { name, url } = schema.parse(await req.json());

  const site = await prisma.site.create({
    data: {
      name,
      url,
      users: {
        create: {
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(site);
}
