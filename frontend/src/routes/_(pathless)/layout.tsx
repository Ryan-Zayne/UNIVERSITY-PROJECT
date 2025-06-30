import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_(path)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/_(path) layout"!
			<Outlet />
		</div>
	);
}
