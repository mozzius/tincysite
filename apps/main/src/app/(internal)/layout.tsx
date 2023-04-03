import { redirect } from "next/navigation";

import { getCurrentUser } from "~/lib/session";

export default async function InternalLayout({ children }) {
  // make sure the user is logged in
  await getCurrentUser();

  return children;
}
