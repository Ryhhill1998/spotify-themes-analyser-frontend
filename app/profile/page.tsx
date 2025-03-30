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

			<div className="p-6">
				<h3 className="mb-4 text-white font-bold">Your top artists</h3>

				<div className="flex overflow-x-auto no-scrollbar">
					{topArtists.map(({ id, name, images }) => (
						<div key={id} className="flex-shrink-0 w-[160px]">
							<TopArtistCard
								imageUrl={images[0].url}
								name={name}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="p-6 pt-2">
				<h3 className="mb-4 text-white font-bold">Your top tracks</h3>

				<div className="h-[330px] overflow-y-scroll no-scrollbar">
					{topTracks.map(
						(
							{
								id,
								name,
								images,
								artist,
								durationFormatted,
								albumName,
							},
							index
						) => (
							<TopTrackCard
								key={id}
								albumImageUrl={images[0].url}
								albumName={albumName}
								trackName={name}
								artistName={artist.name}
								duration={durationFormatted}
								position={index + 1}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
