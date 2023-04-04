import Link from "next/link";
import { Github } from "lucide-react";

import { buttonVariants } from "@tincy/components/ui/button";

import { cn } from "~/lib/utils";

export const runtime = "edge";

export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <div className="flex items-center gap-4">
        <Link
          href="/sign-up"
          className={cn(buttonVariants({ size: "lg", variant: "default" }))}
        >
          Sign up
        </Link>
        <a
          href="https://github.com/mozzius/next13-with-auth"
          target="_blank"
          className={cn(
            buttonVariants({ size: "lg", variant: "outline", hasIcon: true }),
          )}
        >
          <Github size={16} />
          View source
        </a>
      </div>
    </main>
  );
}
