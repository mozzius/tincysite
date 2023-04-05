"use client";

import NextLink, { type LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { buttonVariants } from "@tincy/components/ui/button";

import { cn } from "~/lib/utils";

interface Props extends LinkProps, React.HTMLAttributes<HTMLAnchorElement> {}

export const Link = ({ href, className, ...props }: Props) => {
  const selected = useSelectedLayoutSegment();

  const segment =
    typeof href === "string"
      ? href?.split("/").pop()
      : href.pathname?.split("/").pop();

  const active = selected === segment;

  return (
    <NextLink
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "text-white hover:bg-white/20",
        active && "bg-white/20 hover:bg-white/30",
        className,
      )}
      {...props}
    />
  );
};
