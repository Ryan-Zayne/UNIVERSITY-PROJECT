import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["frontend/dist", "frontend/src/routeTree.gen.ts"],
	react: true,
	tanstack: {
		query: true,
	},
	typescript: {
		tsconfigPath: ["**/tsconfig.json"],
	},
});
