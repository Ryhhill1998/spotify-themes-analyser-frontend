import { handleCookieSet } from "@/app/data/data";

type Cookie = {
	name: string;
	value: string;
};

export async function GET(request: Request) {
	const dataAndCookies: Response = await handleCookieSet();
	console.log({ dataAndCookies });
	const headers: Headers = dataAndCookies.headers;
	console.log({ headers });

	return new Response("Hello, Next.js!", {
		status: 200,
		headers: headers,
	});
}
