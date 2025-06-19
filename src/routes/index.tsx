import { createFileRoute } from "@tanstack/react-router";
import IdCard from "@components/IdCard";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <IdCard />
    </div>
  );
}
