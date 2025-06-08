import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "./router";
import "../tailwind.css";

const rootElement = document.querySelector("#app") as HTMLElement;

createRoot(rootElement).render(
	<StrictMode>
		<Providers />
	</StrictMode>
);
