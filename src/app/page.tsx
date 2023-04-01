import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Link href="/sign-in" className="mt-4 rounded border px-2 py-1">
        Sign in
      </Link>
    </main>
  );
}
