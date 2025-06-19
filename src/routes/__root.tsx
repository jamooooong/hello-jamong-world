import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="w-full min-h-screen relative bg-[radial-gradient(ellipse_84.84%_103.37%_at_31.82%_32.27%,_#FCFCFC_0%,_#AFB7CF_100%)]">
        <p className=" underline">asd</p>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
