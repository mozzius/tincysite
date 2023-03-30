import { Buttons } from "./buttons";

export default function SignInPage() {
  return (
    <section className="flex w-full max-w-sm flex-col items-center justify-center gap-8 rounded border bg-white p-4 shadow-2xl">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <Buttons />
    </section>
  );
}
