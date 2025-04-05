import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Emotion } from "@/app/api/dataTypes";
import { fetchTopEmotions } from "@/app/api/data";
import TopEmotionCard from "./components/TopEmotionCard";
import { Suspense } from "react";
import TopEmotionsGridSkeleton from "./components/TopEmotionsGridSkeleton";
import TopEmotionsGrid from "./components/TopEmotionsGrid";

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

			<Suspense fallback={<TopEmotionsGridSkeleton />}>
				<TopEmotionsGrid timeRange={formattedTimeRange} />
			</Suspense>
		</>
	);
};

export default TopEmotionsPage;
