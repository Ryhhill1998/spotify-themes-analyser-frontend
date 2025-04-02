import TopEmotionCardSkeleton from "./components/TopEmotionCardSkeleton";

const Loading = () => {
	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top emotions
			</h3>

			<div className="container mx-auto flex flex-col gap-2">
				{[...Array(5).keys()].map((_, index) => (
					<TopEmotionCardSkeleton key={index} position={index + 1} />
				))}
			</div>
		</div>
	);
};

export default Loading;
