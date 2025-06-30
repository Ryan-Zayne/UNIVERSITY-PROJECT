import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		viteTsconfigPaths(),
		tanstackRouter({ autoCodeSplitting: true, indexToken: "page", routeToken: "layout" }),
		react(),
		tailwindcss(),
	],
});
