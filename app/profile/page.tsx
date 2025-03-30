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
		<div className="container bg-stone-900 mx-auto p-4 rounded-md flex flex-col gap-10">
			<div className="flex gap-4">
				<Image
					src={profile.images[0].url}
					alt="Spotify profile picture"
					width={100}
					height={100}
				/>

				<div className="flex flex-col gap-2">
					<p className="text-white">{profile.displayName}</p>
					<p className="text-white">{profile.email}</p>
					<p className="text-white">
						{profile.followers.total} Followers
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-4">
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

			<div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] grid-flow-col gap-4 overflow-scroll">
				{topArtists.map(({ id, name, images }) => (
					<TopArtistCard
						key={id}
						imageUrl={images[0].url}
						name={name}
					/>
				))}
			</div>
		</div>
	);
};

export default ProfilePage;
