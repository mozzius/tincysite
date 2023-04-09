"use client";

import { useSelectedLayoutSegment } from "next/navigation";

import { Link } from "./link";

export function Nav() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);

  let content: any = null;
  switch (segment) {
    case null:
      content = (
        <>
          <Link href="#">Select site</Link>
        </>
      );
      break;
    case "global":
      content = (
        <>
          <Link href="/admin/global">Overview</Link>
          <Link href="/admin/global/sites">Sites</Link>
          <Link href="/admin/global/users">Users</Link>
        </>
      );
      break;
    default:
      content = (
        <>
          <Link href={`/admin/${segment}/`}>Dashboard</Link>
          <Link href={`/admin/${segment}/analytics`}>Analytics</Link>
          <Link href={`/admin/${segment}/billing`}>Billing</Link>
          <Link href={`/admin/${segment}/settings`}>Settings</Link>
        </>
      );
      break;
  }

  return <nav className="flex gap-2 py-4">{content}</nav>;
}
