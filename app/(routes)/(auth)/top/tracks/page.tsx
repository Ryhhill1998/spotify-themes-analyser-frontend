import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopTracksPage = async ({
	searchParams,
}: {
	searchParams?: Promise<{ history: string }>;
}) => {
	const search = await searchParams;
	const history = search?.history ?? "short";

	const topTracks: Track[] = await fetchTopTracks(history);

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
