import TopGenreCardSkeleton from "./TopGenreCardSkeleton";

const TopGenresGridSkeleton = () => {
	return (
		<div className="container mx-auto flex flex-col gap-2">
			{[...Array(5).keys()].map((_, index) => (
				<TopGenreCardSkeleton key={index} position={index + 1} />
			))}
		</div>
	);
};

export default TopGenresGridSkeleton;
