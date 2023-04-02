"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

import { toast } from "@tincy/components/lib/hooks/use-toast";
import { Button } from "@tincy/components/ui/button";
import { Input } from "@tincy/components/ui/input";
import { Separator } from "@tincy/components/ui/separator";

interface Props {
  sign: "in" | "up";
}

export function AuthForm({ sign }: Props) {
  const [emailLoading, setEmailLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const searchParams = useSearchParams();

  const isLoading = emailLoading || githubLoading || googleLoading;

  const callbackUrl = searchParams?.get("from") || "/dashboard";

  return (
    <div className="flex w-full flex-col gap-8">
      <form
        className="w-full space-y-2"
        onSubmit={async (e) => {
          e.preventDefault();

          setEmailLoading(true);

          const email = (e.currentTarget.email as HTMLInputElement).value;

          const res = await signIn("email", {
            email,
            redirect: false,
            callbackUrl,
          });

          setEmailLoading(false);

          switch (res?.ok) {
            case true:
              toast({
                title: "Check your email",
                description:
                  "We sent you a login link. Be sure to check your spam too.",
              });
              break;
            case false:
              toast({
                title: "Error",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive",
              });
              break;
            default:
              toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
              });
              break;
          }
        }}
      >
        <Input
          name="email"
          type="email"
          placeholder="name@example.com"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
        />
        <Button
          variant="default"
          type="submit"
          width="full"
          icon={Mail}
          disabled={isLoading}
          loading={emailLoading}
        >
          Sign {sign} with email
        </Button>
      </form>

      <div className="inline-flex w-full items-center justify-center">
        <Separator />
        <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-sm text-gray-700">
          or continue with
        </span>
      </div>

      <div className="w-full space-y-2 flex flex-col">
        <Button
          variant="outline"
          onClick={async () => {
            setGoogleLoading(true);
            await signIn("google", { callbackUrl });
          }}
          icon={({ size }) => (
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
            >
              <title>Google</title>
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          )}
          disabled={isLoading}
          loading={googleLoading}
        >
          Google
        </Button>

        <Button
          variant="outline"
          onClick={async () => {
            setGithubLoading(true);
            await signIn("github", { callbackUrl });
          }}
          icon={Github}
          disabled={isLoading}
          loading={githubLoading}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}
