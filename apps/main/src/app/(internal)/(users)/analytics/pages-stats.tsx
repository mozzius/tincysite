import { type CSSProperties } from "react";
import { z } from "zod";

const headers = {
  Authorization: `Bearer ${process.env.PLAUSIBLE_TOKEN}`,
};

const schema = z.object({
  results: z.array(
    z.object({
      page: z.string(),
      visitors: z.number(),
    }),
  ),
});

interface Props {
  period?: string;
}

export async function PagesStats({ period }: Props) {
  const site = "tincy.site";
  const params = new URLSearchParams();
  params.append("site_id", site);
  params.append("property", "event:page");
  params.append("limit", "10");
  if (period) params.append("period", period);
  const res = await fetch(
    `https://plausible.io/api/v1/stats/breakdown?${params.toString()}`,
    { headers, next: { revalidate: 5 } },
  );

  if (!res.ok) {
    return <div className="my-10 text-center">Failed to fetch analytics</div>;
  }

  const data = await res.json();

  const pages = schema.parse(data).results;

  if (pages.length === 0) {
    return null;
  }

  const largest = pages[0].visitors;

  return (
    <div>
      <h2 className="font-medium">View by page</h2>
      <div className="mt-2 flex w-full flex-col gap-1">
        {pages.map(({ page, visitors }) => (
          <div
            key={page}
            data-width={(visitors / largest) * 100}
            className="w-[--bar-width] bg-gray-200 px-2 py-1 text-sm transition hover:bg-purple-300"
            style={
              {
                "--bar-width": `${(visitors / largest) * 100}%`,
              } as CSSProperties
            }
          >
            <p className="flex w-full justify-between gap-2 whitespace-pre">
              <span>{page}</span>
              <span>{visitors}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
