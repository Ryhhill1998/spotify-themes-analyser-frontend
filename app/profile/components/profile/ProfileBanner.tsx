import Image from "next/image";

import { fetchProfile } from "@/app/api/data";
import { Profile } from "@/app/api/dataTypes";

const ProfileBanner = async () => {
	const profile: Profile = await fetchProfile();

	return (
		<div className="flex items-center gap-4 p-6 bg-stone-700 rounded-t-md">
			<Image
				src={profile.images[0].url}
				alt="Spotify profile picture"
				width={200}
				height={200}
				className="rounded-full"
			/>

			<div className="flex flex-col gap-2">
				<p className="text-white font-extrabold text-6xl">
					{profile.displayName}
				</p>

				<p className="text-stone-300 text-xs">{profile.email}</p>
				<p className="text-stone-300 text-xs">
					{profile.followers.total} Followers
				</p>
			</div>
		</div>
	);
};

export default ProfileBanner;
