import { Suspense } from "react";
import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import TopTracksGrid from "./components/TopTracksGrid";
import TopTracksGridSkeleton from "./components/TopTracksGridSkeleton";

const TopTracksPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;
	const formattedTimeRange = timeRange.replace("-", "_");

	return (
		<>
			<TopTitleAndTimeRanges name="tracks" />

			<Suspense fallback={<TopTracksGridSkeleton />}>
				<TopTracksGrid timeRange={formattedTimeRange} />
			</Suspense>
		</>
	);
};

export default TopTracksPage;
