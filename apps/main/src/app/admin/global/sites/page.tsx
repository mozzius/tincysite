import { prisma } from "@tincy/db";

import { AddSite } from "./add-site";

export default async function SitesPage() {
  const sites = await prisma.site.findMany();

  if (sites.length === 0) {
    return (
      <div className="flex h-[300px] w-full flex-col items-center justify-center gap-6">
        <p className="text-lg font-medium">No sites yet</p>
        <AddSite />
      </div>
    );
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sites.map((site) => (
          <div
            className="space-y-4 rounded border bg-white p-6 shadow"
            key={site.id}
          >
            <p className="text-xl font-medium">
              <span>{site.name}</span>
              <span className="ml-2 font-normal text-gray-500">{site.url}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
