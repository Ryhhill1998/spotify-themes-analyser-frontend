import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./components/TopEmotionCard";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopEmotionsPage = async ({
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

	const topEmotions: Emotion[] | null = await fetchTopEmotions(timeRange);

	if (!topEmotions) {
		return <></>;
	}

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
