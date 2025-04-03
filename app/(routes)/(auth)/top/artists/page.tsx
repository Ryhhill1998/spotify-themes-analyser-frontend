import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { Artist } from "@/app/data/dataTypes";
import { fetchTopArtists } from "@/app/data/data";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopArtistsPage = async ({
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

	const topArtists: Artist[] = await fetchTopArtists(timeRange);

	return (
		<>
			<TopTitleAndTimeRanges name="artists" />

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
				{topArtists.map(({ id, name, images }) => (
					<TopArtistCard
						key={id}
						artistId={id}
						imageUrl={images[0].url}
						name={name}
					/>
				))}
			</div>
		</>
	);
};

export default TopArtistsPage;
