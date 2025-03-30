import Image from "next/image";

import { fetchProfile, fetchTopArtists, fetchTopTracks } from "@/app/api/data";
import { Profile, Track, Artist } from "@/app/api/dataTypes";
import TopTrackCard from "../top-tracks/components/TopTrackCard";
import TopArtistCard from "../top-artists/components/TopArtistCard";

const ProfilePage = async () => {
	const profile: Profile = await fetchProfile();
	const topTracks: Track[] = await fetchTopTracks(10);
	const topArtists: Artist[] = await fetchTopArtists(10);

	return (
		<div className="container bg-stone-900 mx-auto rounded-md">
			<div className="flex items-center gap-4 p-6 bg-stone-700 rounded-t-md">
				<Image
					src={profile.images[0].url}
					alt="Spotify profile picture"
					width={150}
					height={150}
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

			<div className="p-6">
				<h3 className="mb-4 text-white font-bold">Your top tracks</h3>

				<div className="flex flex-col gap-4 h-[314px] overflow-y-scroll no-scrollbar">
					{topTracks.map(
						(
							{ id, name, images, artist, durationFormatted },
							index
						) => (
							<TopTrackCard
								key={id}
								albumImageUrl={images[0].url}
								trackName={name}
								artistName={artist.name}
								duration={durationFormatted}
								position={index + 1}
							/>
						)
					)}
				</div>
			</div>

			<div className="p-6">
				<h3 className="mb-4 text-white font-bold">Your top tracks</h3>

				<div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] grid-flow-col gap-4 overflow-y-scroll no-scrollbar">
					{topArtists.map(({ id, name, images }) => (
						<TopArtistCard
							key={id}
							imageUrl={images[0].url}
							name={name}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
