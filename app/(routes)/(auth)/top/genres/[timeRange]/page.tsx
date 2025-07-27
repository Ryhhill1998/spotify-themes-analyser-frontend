import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Suspense } from "react";
import TopGenresChart from "./components/TopGenresChart";
import TopItemsBarChartSkeleton from "../../../components/common/TopItemsBarChartSkeleton";

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

			<Suspense fallback={<TopItemsBarChartSkeleton />}>
				<TopGenresChart timeRange={formattedTimeRange} />
			</Suspense>
		</>
	);
};

export default TopEmotionsPage;
