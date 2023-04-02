"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";

import { Button, type ButtonProps } from "@tincy/components/ui/button";

interface Props extends ButtonProps {
  callbackUrl?: string;
}

export const SignOutButton = ({ callbackUrl = "/", ...props }: Props) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      onClick={async () => {
        setLoading(true);
        await signOut({ callbackUrl })
        // in case the sign out fails, we want to stop the loading state
        // not sure why this would happen, but it might
        setTimeout(() => setLoading(false), 100);
      }}
      loading={loading || props.loading}
      {...props}
    />
  );
};
