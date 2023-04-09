import Link from "next/link";

import { prisma } from "@tincy/db";

import { getCurrentUser } from "~/lib/session";

export default async function AdminPage() {
  const user = await getCurrentUser();

  const details = await prisma.user.findFirstOrThrow({
    where: { id: user.id },
    include: { sites: { select: { site: true } } },
  });

  if (details.sites.length === 0) {
    return <p className="my-8 text-center">No sites yet</p>;
  }

  return (
    <>
      <div className="mt-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {details.sites.map(({ site }) => (
          <Link
            href={`/admin/${site.url}`}
            className="block cursor-pointer space-y-4 rounded border bg-white p-6 shadow transition hover:shadow-lg"
            key={site.id}
          >
            <p className="text-xl font-medium">
              <span>{site.name}</span>
              <span className="ml-2 font-normal text-gray-500">{site.url}</span>
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}
