"use client";

interface ErrorProps {
	error: Error & { statusCode?: number }; // Type your custom properties
	reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
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
