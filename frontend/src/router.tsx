import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { cache } from "react";
import { routeTree } from "./routeTree.gen";

// == Create a new router instance
const router = createRouter({
	context: { queryClient: undefined },
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	defaultStructuralSharing: true,
	routeTree,
	scrollRestoration: true,
});

// == Register the router instance for type safety
declare module "@tanstack/react-router" {
	// eslint-disable-next-line ts-eslint/consistent-type-definitions
	interface Register {
		router: typeof router;
	}
}

const makeQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
			},
		},
	});
};

const getQueryClient = cache(() => makeQueryClient());

function Providers() {
	const queryClient = getQueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} context={{ queryClient }} />
		</QueryClientProvider>
	);
}

export { Providers };
