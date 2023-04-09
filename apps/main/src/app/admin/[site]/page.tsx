import { AggregateStats } from "./analytics/aggregate-stats";

export default async function DashboardPage({ params }) {
  return (
    <>
      {/** @ts-expect-error async serer component */}
      <AggregateStats site={params.site} />
    </>
  );
}
