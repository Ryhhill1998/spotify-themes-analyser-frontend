import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";

type TopTracksGridProps = {
	timeRange: string;
};

const TopTracksGrid = async ({ timeRange }: TopTracksGridProps) => {
	const topTracks: Track[] = await fetchTopTracks(timeRange);

	return (
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
						positionChange,
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
						positionChange={positionChange}
					/>
				)
			)}
		</div>
	);
};

export default TopTracksGrid;
