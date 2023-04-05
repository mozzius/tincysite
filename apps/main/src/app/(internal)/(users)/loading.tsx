import { Spinner } from "@tincy/components/ui/spinner";

export default function Loading() {
  return (
    <div className="flex h-full min-h-[300px] items-center justify-center">
      <Spinner size={32} />
    </div>
  );
}
