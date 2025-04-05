import { Suspense } from "react";
import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import TopArtistsGrid from "./components/TopArtistsGrid";
import TopArtistGridSkeleton from "./components/TopArtistsGridSkeleton";

const TopArtistsPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;
	const formattedTimeRange = timeRange.replace("-", "_");

	return (
		<>
			<TopTitleAndTimeRanges name="artists" />

			<Suspense fallback={<TopArtistGridSkeleton />}>
				<TopArtistsGrid timeRange={formattedTimeRange} />
			</Suspense>
		</>
	);
};

export default TopArtistsPage;
