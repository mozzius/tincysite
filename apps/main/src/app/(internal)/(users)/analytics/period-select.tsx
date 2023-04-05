"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@tincy/components/ui/select";

export const PeriodSelect = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const value = searchParams?.get("period") ?? undefined;

  return (
    <Select
      value={value}
      defaultValue={"30d"}
      onValueChange={(value) => {
        if (!searchParams || !pathname) return;
        const newParams = new URLSearchParams(searchParams);
        if (value) newParams.set("period", value);
        router.push(pathname + "?" + newParams.toString());
      }}
    >
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Period" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="day">Today</SelectItem>
          <SelectItem value="7d">Last 7 Days</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="month">Month to date</SelectItem>
          <SelectItem value="30d">Last 30 Days</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="6mo">Last 6 Months</SelectItem>
          <SelectItem value="12mo">Last 12 Months</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
