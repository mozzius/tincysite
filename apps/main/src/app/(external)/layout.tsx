import { ExternalNav } from "~/components/external-nav";

export default function ExternalLayout({ children }) {
  return (
    <>
      <ExternalNav />
      {children}
    </>
  );
}
