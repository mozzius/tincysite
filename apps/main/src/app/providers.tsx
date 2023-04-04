"use client";

import { SessionProvider } from "next-auth/react";

import { Toaster } from "@tincy/components/ui/toaster";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <SessionProvider>
      {children}
      <Toaster />
    </SessionProvider>
  );
};
