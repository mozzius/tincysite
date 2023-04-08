"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@tincy/components/ui/select";

export type Metric =
  | "visitors"
  | "visits"
  | "pageviews"
  | "views_per_visit"
  | "bounce_rate"
  | "visit_duration";

export const MetricSelect = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const value = (searchParams?.get("metric") as Metric) ?? undefined;

  return (
    <Select
      value={value}
      onValueChange={(value) => {
        if (!searchParams || !pathname) return;
        const newParams = new URLSearchParams(searchParams);
        if (value) newParams.set("metric", value);
        router.push(pathname + "?" + newParams.toString());
      }}
    >
      <SelectTrigger className="w-44">
        <SelectValue placeholder="Chart metric" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="visitors">Unique visitors</SelectItem>
        <SelectItem value="visits">Visits</SelectItem>
        <SelectItem value="pageviews">Pageviews</SelectItem>
        <SelectItem value="views_per_visit">Views per visit</SelectItem>
        <SelectItem value="bounce_rate">Bounce rate</SelectItem>
        <SelectItem value="visit_duration">Visit duration</SelectItem>
      </SelectContent>
    </Select>
  );
};
