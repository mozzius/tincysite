import { z } from "zod";

const headers = {
  Authorization: `Bearer ${process.env.PLAUSIBLE_TOKEN}`,
};

const schema = z.object({
  results: z.object({
    visitors: z.object({
      value: z.number(),
    }),
    visits: z.object({
      value: z.number(),
    }),
    pageviews: z.object({
      value: z.number(),
    }),
    bounce_rate: z.object({
      value: z.number(),
    }),
    visit_duration: z.object({
      value: z.number(),
    }),
  }),
});

interface Props {
  period?: string;
}

export async function AggregateStats({ period }: Props) {
  const site = "tincy.site";
  const params = new URLSearchParams();
  params.append("site_id", site);
  params.append(
    "metrics",
    "visitors,visits,pageviews,bounce_rate,visit_duration",
  );
  if (period) params.append("period", period);
  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?${params.toString()}`,
    { headers, next: { revalidate: 5 } },
  );

  if (!res.ok) {
    return <div className="my-10 text-center">Failed to fetch analytics</div>;
  }

  const data = await res.json();

  const {
    bounce_rate: { value: bounce_rate },
    pageviews: { value: pageviews },
    visit_duration: { value: visit_duration },
    visitors: { value: visitors },
    visits: { value: visits },
  } = schema.parse(data).results;

  return (
    <div className="grid w-full grid-cols-3 divide-x border-b pb-4 text-center md:grid-cols-4 lg:grid-cols-5">
      <div className="py-2">
        <p className="text-3xl font-bold">{visitors}</p>
        <p className="text-sm text-gray-600">Visitors</p>
      </div>
      <div className="py-2">
        <p className="text-3xl font-bold">{visits}</p>
        <p className="text-sm text-gray-600">Visits</p>
      </div>
      <div className="py-2">
        <p className="text-3xl font-bold">{pageviews}</p>
        <p className="text-sm text-gray-600">Pageviews</p>
      </div>
      <div className="hidden py-2 md:block">
        <p className="text-3xl font-bold">{bounce_rate}%</p>
        <p className="text-sm text-gray-600">Bounce Rate</p>
      </div>
      <div className="hidden py-2 lg:block">
        <p className="text-3xl font-bold">
          {Math.floor(visit_duration / 60)}m {visit_duration % 60}s
        </p>
        <p className="text-sm text-gray-600">Visit Duration</p>
      </div>
    </div>
  );
}
