import TopTrackCardSkeleton from "@/app/(routes)/(auth)/top-tracks/components/TopTrackCardSkeleton";

const TopTracksSectionSkeleton = () => {
	return (
		<div className="p-6 pt-2">
			<h3 className="mb-4 text-white font-bold">Your top tracks</h3>

			<div className="h-[330px] overflow-y-scroll no-scrollbar">
				{[...Array(10).keys()].map((_, index) => (
					<TopTrackCardSkeleton
						key={"track-skeleton" + index}
						position={index + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default TopTracksSectionSkeleton;
