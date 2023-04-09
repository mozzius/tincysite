import { redirect } from "next/navigation";

import { UserRole, prisma } from "@tincy/db";

import { getCurrentUser } from "~/lib/session";

export default async function SiteLayout({ params, children }) {
  const user = await getCurrentUser();

  const details = await prisma.user.findUnique({
    where: { id: user.id },
    include: { sites: { select: { site: true } } },
  });

  if (!details) {
    redirect("/sign-in");
  }

  if (
    !details.sites.find((x) => x.site.url === params.site) ||
    details.role !== UserRole.ADMIN
  ) {
    redirect("/admin");
  }

  return children;
}
