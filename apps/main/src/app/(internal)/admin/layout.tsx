import { InternalLayoutInner } from "../layout-inner";
import { Link } from "../link";

export default async function UsersLayout({ children }) {
  return (
    <InternalLayoutInner
      children={children}
      nav={
        <>
          <Link href="/admin/dashboard">Dashboard</Link>
          <Link href="/admin/users">Users</Link>
        </>
      }
    />
  );
}
