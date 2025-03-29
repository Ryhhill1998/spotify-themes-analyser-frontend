"use server";

import { cookies } from "next/headers";

const API_BASE_URL = "http://localhost:8080";

interface ProfileBase {
	id: string;
	email: string;
	href: string;
	images: [{ url: string; height: number; width: number }];
	followers: { total: number };
}

interface ProfileAPI extends ProfileBase {
	display_name: string;
}

export interface Profile extends ProfileBase {
	displayName: string;
}

const fetchSpotifyProfile = async () => {
	const cookiesToSend = await cookies();
	const res = await fetch(`${API_BASE_URL}/data/me/profile`, {
		headers: { Cookie: cookiesToSend.toString() },
	});
	const data: ProfileAPI = await res.json();
	const profile: Profile = { ...data, displayName: data.display_name };
	return profile;
};

export { fetchSpotifyProfile };
