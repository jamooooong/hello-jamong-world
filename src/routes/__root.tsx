import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import BackGround from "@components/BackGround";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="w-full min-h-screen">
        <div className="absolute z-10 w-full h-full">
          <Outlet />
        </div>
        <BackGround />
      </div>
    </React.Fragment>
  );
}
