import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@tincy/components/ui/avatar";

import { getCurrentUser } from "~/lib/session";

export default async function InternalLayout({ children }) {
  // make sure the user is logged in
  const user = await getCurrentUser();

  return (
    <div className="w-full bg-gray-100">
      <div className="absolute top-0 h-96 w-full bg-gradient-to-b from-purple-700 from-50% to-gray-100" />
      <div className="relative flex min-h-screen w-full flex-col px-4">
        <header className="container flex items-center justify-between py-6">
          <h1 className="text-xl font-bold text-white">tincy.site</h1>
          <Avatar>
            <AvatarImage src={user.image!} alt={user.name!} />
            <AvatarFallback>
              {user.name
                ?.split(" ")
                .filter(Boolean)
                .map((x) => x[0]!.toLocaleUpperCase())}
            </AvatarFallback>
          </Avatar>
        </header>
        <div className="container border-t">{children}</div>
        <div className="flex-1" />
        <footer className="container mt-4 border-t py-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Samuel Newman
        </footer>
      </div>
    </div>
  );
}
