import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["frontend/dist", "frontend/src/routeTree.gen.ts"],
	react: true,
	tailwindcssBetter: {
		settings: {
			tailwindConfigPath: "./frontend/tailwind.css",
		},
	},
	tanstack: {
		query: true,
		router: true,
	},
	typescript: {
		tsconfigPath: ["**/tsconfig.json"],
	},
});
