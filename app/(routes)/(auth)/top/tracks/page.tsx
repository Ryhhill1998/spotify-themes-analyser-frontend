import { fetchTopTracks } from "@/app/data/data";
import { Track } from "@/app/data/dataTypes";
import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopTracksPage = async ({
	searchParams,
}: {
	searchParams?: Promise<{ "time-range": string }>;
}) => {
	const search = await searchParams;
	let timeRange = "short_term";

	if (search) {
		timeRange = search["time-range"];

		if (timeRange) {
			timeRange = timeRange.replace("-", "_");
		} else {
			timeRange = "short_term";
		}
	}

	const topTracks: Track[] = await fetchTopTracks(timeRange);

	return (
		<>
			<TopTitleAndTimeRanges name="tracks" />

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
