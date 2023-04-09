"use client";

import { useMemo } from "react";
import { Chart, type AxisOptions } from "react-charts";

import { Metric } from "./metric-select";

//"visitors" | "visits" | "pageviews" | "views_per_visit" | "bounce_rate" | "visit_duration"

interface Props {
  label: string;
  metric: Metric;
  data:
    | ({
        date: string;
      } & (
        | { visitors: number }
        | { visits: number }
        | { pageviews: number }
        | { views_per_visit: number }
        | { bounce_rate: number }
        | { visit_duration: number }
      ))[];
}

export function LineChart({ label, metric, data }: Props) {
  const primaryAxis = useMemo<AxisOptions<(typeof data)[number]>>(
    () => ({
      getValue: (datum) => new Date(datum.date),
    }),
    [],
  );

  const secondaryAxes = useMemo<AxisOptions<(typeof data)[number]>[]>(
    () => [
      {
        getValue: (datum) => datum[metric],
        elementType: "area",
      },
    ],
    [],
  );

  return (
    <Chart
      options={{
        data: [{ label, data }],
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}
