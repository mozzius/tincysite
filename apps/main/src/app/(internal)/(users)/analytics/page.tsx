import { AggregateStats } from "./aggregate-stats";
import { PageStats } from "./page-stats";
import { PeriodSelect } from "./period-select";
import { SourceStats } from "./source-stats";

export default function AnalyticsPage({ searchParams }) {
  return (
    <>
      {/** @ts-expect-error async serer component */}
      <AggregateStats period={searchParams.period} />
      <div className="flex w-full justify-end mt-2 py-2">
        <PeriodSelect />
      </div>
      <div className="grid w-full grid-cols-1 gap-8 p-4 md:grid-cols-2">
        {/** @ts-expect-error async serer component */}
        <PageStats period={searchParams.period} />
        {/** @ts-expect-error async serer component */}
        <SourceStats period={searchParams.period} />
      </div>
    </>
  );
}
