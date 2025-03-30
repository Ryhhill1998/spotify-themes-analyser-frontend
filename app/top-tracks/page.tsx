import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import TopTrackCard from "@/app/top-tracks/components/TopTrackCard";

const TopTracksPage = async () => {
	const topTracks: Track[] = await fetchTopTracks();

	return (
		<div className="container bg-stone-900 mx-auto p-4 rounded-md">
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
		</div>
	);
};

export default TopTracksPage;
