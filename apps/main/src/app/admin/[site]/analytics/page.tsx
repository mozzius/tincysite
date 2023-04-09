import { AggregateStats } from "./aggregate-stats";
import { MetricSelect } from "./metric-select";
import { PageStats } from "./page-stats";
import { PeriodSelect } from "./period-select";
import { SourceStats } from "./source-stats";
import { TimeSeriesStats } from "./time-series-stats";

export default function AnalyticsPage({ searchParams, params }) {
  return (
    <>
      {/** @ts-expect-error async serer component */}
      <AggregateStats period={searchParams.period} site={params.site} />
      <div className="mt-2 flex w-full justify-end gap-4 py-2">
        <MetricSelect />
        <PeriodSelect />
      </div>
      {/** @ts-expect-error async serer component */}
      <TimeSeriesStats
        period={searchParams.period}
        metric={searchParams.metric}
        site={params.site}
      />
      <div className="grid w-full grid-cols-1 gap-8 p-4 md:grid-cols-2">
        {/** @ts-expect-error async serer component */}
        <PageStats period={searchParams.period} site={params.site} />
        {/** @ts-expect-error async serer component */}
        <SourceStats period={searchParams.period} site={params.site} />
      </div>
    </>
  );
}
