import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Suspense } from "react";
import TopItemsBarChartSkeleton from "../../../components/common/TopItemsBarChartSkeleton";
import TopEmotionsChart from "./components/TopEmotionsChart";

const TopEmotionsPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;
	const formattedTimeRange = timeRange.replace("-", "_");

	return (
		<>
			<TopTitleAndTimeRanges name="emotions" />

			{/* <Suspense fallback={<TopItemsBarChartSkeleton />}>
				<TopEmotionsChart timeRange={formattedTimeRange} />
			</Suspense> */}

			<TopItemsBarChartSkeleton />
		</>
	);
};

export default TopEmotionsPage;
