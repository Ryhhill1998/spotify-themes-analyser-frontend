import TopArtistCardSkeleton from "@/app/(routes)/(auth)/components/common/TopArtistCardSkeleton";

const TopArtistsSectionSkeleton = () => {
	return (
		<div className="p-6">
			<h3 className="mb-4 text-white font-bold">
				Your top artists this month
			</h3>

			<div className="flex overflow-x-auto no-scrollbar">
				{[...Array(10).keys()].map((_, index) => (
					<div
						key={"artist-skeleton" + index}
						className="flex-shrink-0 w-[160px]"
					>
						<TopArtistCardSkeleton />
					</div>
				))}
			</div>
		</div>
	);
};

export default TopArtistsSectionSkeleton;
