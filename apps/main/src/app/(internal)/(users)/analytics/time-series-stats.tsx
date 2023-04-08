import { z } from "zod";

import { LineChart } from "./line-chart";
import { Metric } from "./metric-select";

const headers = {
  Authorization: `Bearer ${process.env.PLAUSIBLE_TOKEN}`,
};

interface Props {
  period?: string;
  metric?: Metric;
}

export async function TimeSeriesStats({ period, metric }: Props) {
  const site = "tincy.site";
  const params = new URLSearchParams();
  params.append("site_id", site);
  if (metric) params.append("metrics", metric);
  if (period) params.append("period", period);
  const res = await fetch(
    `https://plausible.io/api/v1/stats/timeseries?${params.toString()}`,
    { headers, next: { revalidate: 5 } },
  );

  if (!res.ok) {
    return <div className="my-10 text-center">Failed to fetch analytics</div>;
  }

  const data = await res.json();

  const label = {
    visitors: "Unique visitors",
    visits: "Visits",
    pageviews: "Pageviews",
    views_per_visit: "Views per visit",
    bounce_rate: "Bounce rate",
    visit_duration: "Visit duration",
  }[metric ?? "visitors"];

  return (
    <div className="my-2 h-64 lg:mb-4">
      <LineChart
        metric={metric ?? "visitors"}
        label={label}
        data={data.results}
      />
    </div>
  );
}
