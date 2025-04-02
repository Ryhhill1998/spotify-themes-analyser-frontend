import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import TopTitle from "../components/TopTitle";

const TopTracksPage = async () => {
	const topTracks: Track[] = await fetchTopTracks("short_term");

	return (
		<>
			<TopTitle name="tracks" />

			<div>
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
							trackId={id}
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
		</>
	);
};

export default TopTracksPage;
