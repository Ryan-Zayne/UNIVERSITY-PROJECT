import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

type RouterContext = {
	queryClient: QueryClient | undefined;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<div className="flex min-h-svh flex-col">
			<Outlet />
			<TanStackRouterDevtools />
			<ReactQueryDevtools buttonPosition="bottom-right" initialIsOpen={false} />
		</div>
	),
});
