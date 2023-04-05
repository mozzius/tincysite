import { InternalLayoutInner } from "../layout-inner";
import { Link } from "../link";

export default async function UsersLayout({ children }) {
  return (
    <InternalLayoutInner
      children={children}
      nav={
        <>
          <Link href="/admin/overview">Overview</Link>
          <Link href="/admin/users">Users</Link>
        </>
      }
    />
  );
}
