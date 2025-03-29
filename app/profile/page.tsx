import Image from "next/image";

import { fetchSpotifyProfile, Profile } from "../api/data";

const ProfilePage = async () => {
	const profile: Profile = await fetchSpotifyProfile();

	return (
		<div className="text-white">
			<Image
				src={profile.images[0].url}
				alt="Spotify Profile Picture"
				width={100}
				height={100}
			/>
			<p>{profile.displayName}</p>
			<p>{profile.email}</p>
			<p>{profile.followers.total} Followers</p>
		</div>
	);
};

export default ProfilePage;
