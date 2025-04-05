import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./TopEmotionCard";

type TopEmotionsGridProps = {
	timeRange: string;
};

const TopEmotionsGrid = async ({ timeRange }: TopEmotionsGridProps) => {
	const topEmotions: Emotion[] = await fetchTopEmotions(timeRange);

	return (
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
	);
};

export default TopEmotionsGrid;
