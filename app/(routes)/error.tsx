"use client";

import { useEffect } from "react";
import { UnauthorisedAPIError } from "../api/errors";

interface ErrorProps {
	error: Error & { statusCode?: number }; // Type your custom properties
	reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
	useEffect(() => {
		console.error("Error caught by error boundary:", error);
		if (error instanceof UnauthorisedAPIError) {
			console.log("UNAUTHORISED!");
		}
	}, [error]);

	return (
		<div>
			<h2 className="text-white">Something went wrong!</h2>
			<p>{error.message || "An unexpected error occurred."}</p>
			<button onClick={() => reset()}>Try again</button>
		</div>
	);
};

export default Error;
