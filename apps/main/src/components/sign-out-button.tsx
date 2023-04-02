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
      onClick={() => {
        setLoading(true);
        signOut({ callbackUrl });
      }}
      loading={loading || props.loading}
      {...props}
    />
  );
};
