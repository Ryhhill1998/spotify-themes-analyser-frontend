import { fetchTopEmotions } from "@/app/api/data";
import { Emotion } from "@/app/api/dataTypes";
import TopEmotionCard from "./components/TopEmotionCard";
import TopTitle from "../components/TopTitle";

const TopEmotionsPage = async () => {
	const topEmotions: Emotion[] = await fetchTopEmotions();

	return (
		<>
			<TopTitle name="emotions" />

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
