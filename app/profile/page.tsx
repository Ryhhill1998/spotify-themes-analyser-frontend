import Image from "next/image";

import { fetchProfile, fetchTopArtists, fetchTopTracks } from "@/app/api/data";
import { Profile, Track, Artist } from "@/app/api/dataTypes";
import TopTrackCard from "../top-tracks/components/TopTrackCard";
import TopArtistCard from "../top-artists/components/TopArtistCard";

const ProfilePage = async () => {
	const profile: Profile = await fetchProfile();
	const topTracks: Track[] = await fetchTopTracks();
	const topArtists: Artist[] = await fetchTopArtists();

	return (
		<div className="text-white">
			<div>
				<Image
					src={profile.images[0].url}
					alt="Spotify profile picture"
					width={100}
					height={100}
				/>
				<p>{profile.displayName}</p>
				<p>{profile.email}</p>
				<p>{profile.followers.total} Followers</p>
			</div>

			<div className="flex gap-2">
				{topTracks.map(({ id, name, images, artist }) => (
					<TopTrackCard
						key={id}
						albumImageUrl={images[0].url}
						trackName={name}
						artistName={artist.name}
					/>
				))}
			</div>

			<div className="flex gap-2">
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
