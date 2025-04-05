"use client";

import { useEffect } from "react";
import { refreshTokens } from "../api/data";

interface ErrorProps {
	error: Error & { statusCode?: number }; // Type your custom properties
	reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
	useEffect(() => {
		console.error("Error caught by error boundary:", error);

		if (error?.name === "UnauthorisedAPIError") {
			console.log("refreshing tokens");

			// means user's access token cookie is invalid
			refreshTokens();
		}
	}, [error]);

	return (
		<div>
			<h2 className="text-white">Something went wrong!</h2>

			<p>{error.message || "An unexpected error occurred."}</p>

			<button className="text-white" onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
};

export default Error;
