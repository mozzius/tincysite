interface Props extends React.PropsWithChildren {
  nav: React.ReactNode;
}

export function InternalLayoutInner({ nav, children }: Props) {
  return (
    <>
      <nav className="flex gap-2 py-4">{nav}</nav>
      <main className="min-h-[300px] rounded-md bg-white p-4 shadow-lg">
        {children}
      </main>
    </>
  );
}
