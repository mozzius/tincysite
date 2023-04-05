import { AggregateStats } from "../analytics/aggregate-stats";

export default async function DashboardPage() {
  return (
    <>
      {/** @ts-expect-error async serer component */}
      <AggregateStats />
    </>
  );
}
