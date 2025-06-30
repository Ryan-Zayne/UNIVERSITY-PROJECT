import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_(path)/main/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_(path)/main/ page"!</div>;
}
