import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./components/TopEmotionCard";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopEmotionsPage = async ({
	searchParams,
}: {
	searchParams?: Promise<{ history: string }>;
}) => {
	const search = await searchParams;
	const history = search?.history ?? "short";

	const topEmotions: Emotion[] = await fetchTopEmotions(history);

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
