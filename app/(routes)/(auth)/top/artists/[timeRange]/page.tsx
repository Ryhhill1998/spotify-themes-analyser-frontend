import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";
import TopArtistCard from "../../../components/common/TopArtistCard";

const TopArtistsPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;
	const formattedTimeRange = timeRange.replace("-", "_");

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
