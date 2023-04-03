import { redirect } from "next/navigation";

import { UserRole, prisma } from "@tincy/db";

import { getCurrentUser } from "~/lib/session";

export default async function AdminLayout({ children }) {
  // make sure the user is logged in
  const user = await getCurrentUser();

  const details = await prisma.user.findFirstOrThrow({
    where: { id: user.id },
  });

  if (details.role !== UserRole.ADMIN) {
    redirect("/dashboard");
  }

  return children;
}
