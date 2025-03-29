import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./components/TopEmotionCard";

const TopEmotionsPage = async () => {
	const topEmotions: Emotion[] = await fetchTopEmotions();
	console.log({ topEmotions });

	return (
		<div className="container mx-auto flex flex-col gap-2">
			{topEmotions.map(({ name, percentage, trackId }) => (
				<TopEmotionCard
					key={name}
					name={name}
					percentage={percentage}
					trackId={trackId}
				/>
			))}
		</div>
	);
};

export default TopEmotionsPage;
