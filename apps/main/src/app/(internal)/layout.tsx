import { getCurrentUser } from "~/lib/session";

export const runtime = "edge";

export default async function InternalLayout({ children }) {
  // make sure the user is logged in
  await getCurrentUser();

  return children;
}
