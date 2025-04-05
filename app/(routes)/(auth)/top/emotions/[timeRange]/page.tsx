import TopTitleAndTimeRanges from "../../components/TopTitleAndTimeRanges";
import { Emotion } from "@/app/api/dataTypes";
import { fetchTopEmotions } from "@/app/api/data";
import TopEmotionCard from "./components/TopEmotionCard";

const TopEmotionsPage = async ({
	params,
}: {
	params: Promise<{ timeRange: string }>;
}) => {
	const { timeRange } = await params;

	const formattedTimeRange = timeRange.replace("-", "_");

	const topEmotions: Emotion[] = await fetchTopEmotions(formattedTimeRange);

	return (
		<>
			<TopTitleAndTimeRanges name="emotions" />

			<div className="container mx-auto flex flex-col gap-2">
				{topEmotions.map(({ name, percentage, trackId }, index) => (
					<TopEmotionCard
						key={name}
						name={name}
						percentage={percentage}
						trackId={trackId}
						position={index + 1}
					/>
				))}
			</div>
		</>
	);
};

export default TopEmotionsPage;
