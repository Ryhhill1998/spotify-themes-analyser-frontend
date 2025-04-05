import TopTrackCardSkeleton from "@/app/(routes)/(auth)/components/common/TopTrackCardSkeleton";

const TopTracksGridSkeleton = () => {
	return (
		<div>
			{[...Array(50).keys()].map((_, index) => (
				<TopTrackCardSkeleton key={index} position={index + 1} />
			))}
		</div>
	);
};

export default TopTracksGridSkeleton;
