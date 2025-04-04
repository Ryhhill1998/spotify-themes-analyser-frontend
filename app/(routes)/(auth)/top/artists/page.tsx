import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";
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

	const topArtists: Artist[] | null = await fetchTopArtists(timeRange);

	if (!topArtists) {
		return <></>;
	}

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
