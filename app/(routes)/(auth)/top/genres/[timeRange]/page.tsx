import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Suspense } from "react";
import TopEmotionsGridSkeleton from "./components/TopGenresGridSkeleton";
import TopEmotionsGrid from "./components/TopGenresGrid";

const TopEmotionsPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;
	const formattedTimeRange = timeRange.replace("-", "_");

	return (
		<>
			<TopTitleAndTimeRanges name="genres" />

			<Suspense fallback={<TopEmotionsGridSkeleton />}>
				<TopEmotionsGrid timeRange={formattedTimeRange} />
			</Suspense>
		</>
	);
};

export default TopEmotionsPage;
