import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import TitleAndShowAllLink from "../TitleAndShowAllLink";

const TopTracksSection = async () => {
	const topTracks: Track[] = await fetchTopTracks("short_term", 10);

	return (
		<div className="p-6 pt-2">
			<TitleAndShowAllLink name="tracks" />

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
							positionChange,
						},
						index
					) => (
						<TopTrackCard
							key={id}
							trackId={id}
							albumImageUrl={images[0]?.url}
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
		</div>
	);
};

export default TopTracksSection;
