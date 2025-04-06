import Image from "next/image";

import { fetchProfile } from "@/app/api/data";
import { Profile } from "@/app/api/dataTypes";

const ProfileBanner = async () => {
	const profile: Profile = await fetchProfile();

	return (
		<div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 p-2 py-6 sm:px-6 bg-stone-800 rounded-t-md">
			{profile.images?.length > 0 && (
				<Image
					src={profile.images[0].url}
					alt="Spotify profile picture"
					width={200}
					height={200}
					className="aspect-square object-cover rounded-full"
				/>
			)}

			<div className="flex flex-col gap-2 text-center sm:text-left">
				<p className="text-stone-300 hidden sm:block text-sm">
					Profile
				</p>

				<p className="text-white font-extrabold text-4xl sm:text-6xl mb-2">
					{profile.displayName}
				</p>

				{profile.email && (
					<p className="text-stone-300 text-sm">{profile.email}</p>
				)}

				<p className="text-stone-300 text-sm">
					{profile.followers} Followers
				</p>
			</div>
		</div>
	);
};

export default ProfileBanner;
