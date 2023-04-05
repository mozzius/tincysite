"use client";

import { useEffect } from "react";

import { Button } from "@tincy/components/ui/button";

export default function AnalyticsError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="my-10 flex flex-col items-center gap-4">
      <p className="text-center">Failed to fetch analytics</p>
      <Button onClick={reset}>Retry</Button>
    </div>
  );
}
