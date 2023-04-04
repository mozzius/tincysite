import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@tincy/components/ui/avatar";
import { prisma } from "@tincy/db";

export default async function ListUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {users.map((user) => (
        <div
          className="space-y-4 rounded border bg-white p-6 shadow-lg"
          key={user.id}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={user.image!} alt={user.name!} />
              <AvatarFallback>
                {user.name
                  ?.split(" ")
                  .filter(Boolean)
                  .map((x) => x[0]!.toLocaleUpperCase())}
              </AvatarFallback>
            </Avatar>
            <p className="text-xl font-medium">{user.name}</p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-gray-500">{user.email}</p>
            <span className="rounded bg-indigo-800 px-2 py-1 text-sm text-white">
              {user.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
