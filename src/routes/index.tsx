import { createFileRoute } from "@tanstack/react-router";
import IdCard from "../shared/components/IdCard";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <IdCard />
    </div>
  );
}
