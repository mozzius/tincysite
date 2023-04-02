"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { type Session } from "next-auth";

import { toast } from "@tincy/components/lib/hooks/use-toast";
import { Button } from "@tincy/components/ui/button";
import { Input } from "@tincy/components/ui/input";
import { Label } from "@tincy/components/ui/label";

interface Props {
  user: Session["user"];
}

export const NewUserForm = ({ user }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="w-full space-y-4"
      onSubmit={async (evt) => {
        evt.preventDefault();

        const name = (evt.currentTarget.username as HTMLInputElement).value;

        setLoading(true);

        const res = await fetch("/new-user/update", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            // image: "https://i.tincy.pics/clfyiqhze00012e69qiyslzyl",
          }),
        });

        if (res.ok) {
          router.push("/dashboard");
        } else {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
        }

        setLoading(false);
      }}
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          defaultValue={user.email ?? ""}
          disabled
          required
        />
      </div>
      <div>
        <Label htmlFor="username">Name</Label>
        <Input
          id="username"
          name="username"
          type="text"
          defaultValue={user.name ?? ""}
          required
        />
      </div>
      <Button width="full" type="submit" disabled={loading}>
        Create account
      </Button>
    </form>
  );
};
