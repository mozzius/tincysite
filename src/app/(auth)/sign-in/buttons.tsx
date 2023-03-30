"use client";

import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

export function Buttons() {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      <button
        className="flex w-full items-center justify-center gap-2 rounded border border-black bg-black py-1 text-white"
        onClick={() => signIn("github")}
      >
        <Github />
        GitHub
      </button>
      <button
        className="flex w-full items-center justify-center gap-2 rounded border py-1"
        onClick={() => signIn("email")}
      >
        <Mail />
        Email
      </button>
    </div>
  );
}
