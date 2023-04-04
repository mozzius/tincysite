import { AggregateStats } from "./aggregate";

export default function AnalyticsPage() {
  return (
    <>
      {/** @ts-expect-error async serer component */}
      <AggregateStats />
    </>
  );
}
