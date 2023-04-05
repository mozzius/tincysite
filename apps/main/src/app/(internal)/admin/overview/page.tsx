import Link from "next/link";

import { prisma } from "@tincy/db";

export default async function AdminDashboardPage() {
  const users = await prisma.user.count();

  return (
    <>
      <div className="grid w-full grid-cols-3 divide-x border-b pb-4 text-center md:grid-cols-4 lg:grid-cols-5">
        <Link as="div" href="/admin/users" className="block py-2">
          <p className="text-3xl font-bold">{users}</p>
          <p className="text-sm text-gray-600">Users</p>
        </Link>
        {/* <div className="py-2">
     <p className="text-3xl font-bold">{visits}</p>
     <p className="text-sm text-gray-600">Visits</p>
   </div>
   <div className="py-2">
     <p className="text-3xl font-bold">{pageviews}</p>
     <p className="text-sm text-gray-600">Pageviews</p>
   </div>
   <div className="py-2">
     <p className="text-3xl font-bold">{pageviews}</p>
     <p className="text-sm text-gray-600">Pageviews</p>
   </div> */}
      </div>
    </>
  );
}
