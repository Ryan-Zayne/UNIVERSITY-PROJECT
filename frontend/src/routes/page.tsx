import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
	component: HomePage,
});

function HomePage() {
	return (
		<div
			className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-400
				to-blue-500 px-4 py-12"
		>
			<div className="max-w-md space-y-4">
				<img src={logo} className="mx-auto h-12 w-auto" alt="logo" />
				<h1 className="text-4xl font-bold text-white">Welcome to the University Project</h1>
				<p className="text-xl text-white">This is a university project</p>
				<button
					type="button"
					className="rounded bg-white px-4 py-2 font-bold text-blue-500 hover:bg-blue-50"
				>
					Click me
				</button>
			</div>
		</div>
	);
}
