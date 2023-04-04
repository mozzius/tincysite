import { InternalLayoutInner } from "../layout-inner";
import { Link } from "../link";

export default async function UsersLayout({ children }) {
  return (
    <InternalLayoutInner
      children={children}
      nav={
        <>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/">Billing</Link>
          <Link href="/">Settings</Link>
        </>
      }
    />
  );
}
