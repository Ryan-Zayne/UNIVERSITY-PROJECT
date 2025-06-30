import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_(path)/main")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			Hello "/_(path)/main layout"!
			<Outlet />
		</div>
	);
}
