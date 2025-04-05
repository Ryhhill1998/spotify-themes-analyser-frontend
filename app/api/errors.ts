class APIError extends Error {
	statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.name = "APIError";
		this.statusCode = statusCode;
	}
}

class BadRequestAPIError extends APIError {
	constructor() {
		super("Bad request.", 400);
		this.name = "BadRequestAPIError";
	}
}

class UnauthorisedAPIError extends APIError {
	constructor() {
		super("Unauthorised.", 401);
		this.name = "UnauthorisedAPIError";
	}
}

class UnexpectedAPIError extends APIError {
	constructor() {
		super("Something went wrong.", 500);
		this.name = "UnexpectedAPIError";
	}
}

export {
	APIError,
	BadRequestAPIError,
	UnauthorisedAPIError,
	UnexpectedAPIError,
};
