import TopArtistCardSkeleton from "@/app/(routes)/(auth)/components/common/TopArtistCardSkeleton";

const TopArtistGridSkeleton = () => {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
			{[...Array(50).keys()].map((_, index) => (
				<TopArtistCardSkeleton key={index} />
			))}
		</div>
	);
};

export default TopArtistGridSkeleton;
