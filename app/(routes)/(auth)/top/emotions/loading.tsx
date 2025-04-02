import TopTitle from "../components/TopTitle";
import TopEmotionCardSkeleton from "./components/TopEmotionCardSkeleton";

const Loading = () => {
	return (
		<>
			<TopTitle name="emotions" />

			<div className="container mx-auto flex flex-col gap-2">
				{[...Array(5).keys()].map((_, index) => (
					<TopEmotionCardSkeleton key={index} position={index + 1} />
				))}
			</div>
		</>
	);
};

export default Loading;
