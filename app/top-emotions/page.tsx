import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./components/TopEmotionCard";

const TopEmotionsPage = async () => {
	const topEmotions: Emotion[] = await fetchTopEmotions();

	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top emotions
			</h3>

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
		</div>
	);
};

export default TopEmotionsPage;
