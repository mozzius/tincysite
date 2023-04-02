"use client";

import { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@tincy/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@tincy/components/ui/navigation-menu";

import { cn } from "~/lib/utils";

export const ExternalNav = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    setAtTop(window.scrollY <= 0);
    window.onscroll = () => setAtTop(window.scrollY <= 0);

    return () => void (window.onscroll = null);
  }, []);

  return (
    <header
      data-at-top={atTop}
      className="fixed top-0 z-20 w-full transition-all data-[at-top=false]:bg-white/80 data-[at-top=false]:shadow-sm"
    >
      <nav className="container relative mx-auto flex items-center justify-between px-8 py-2 md:px-16">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "ghost" }), "font-bold")}
        >
          Tincy Site
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Themes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-300 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/themes"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          Themes
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Explore our stunning themes.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/themes/folgate" title="Folgate">
                    Elegant, refined.
                  </ListItem>
                  <ListItem href="/themes/blossom" title="Blossom">
                    Peaceful, beautiful.
                  </ListItem>
                  <ListItem href="/themes/sclater" title="Sclater">
                    Modern, minimal.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-1">
          <Link
            href="/sign-in"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className={cn(
              buttonVariants({ variant: "default", hasIcon: true }),
            )}
          >
            Get started
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
