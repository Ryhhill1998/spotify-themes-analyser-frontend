import Image from "next/image";

import { fetchProfile } from "@/app/api/data";
import { Profile } from "@/app/api/dataTypes";

const ProfileBanner = async () => {
	const profile: Profile | null = await fetchProfile();

	if (!profile) {
		return <></>;
	}

	const images = profile.images;
	const imageUrl = images.length ? images[0]?.url : "";

	return (
		<div className="flex items-end gap-4 p-6 bg-stone-800 rounded-t-md">
			<Image
				src={imageUrl}
				alt="Spotify profile picture"
				width={225}
				height={225}
				className="rounded-full"
			/>

			<div className="flex flex-col gap-2 p-4">
				<p className="text-stone-300 text-sm">Profile</p>

				<p className="text-white font-extrabold text-7xl mb-2">
					{profile.displayName}
				</p>

				<p className="text-stone-300 text-sm">{profile.email}</p>
				<p className="text-stone-300 text-sm">
					{profile.followers} Followers
				</p>
			</div>
		</div>
	);
};

export default ProfileBanner;
