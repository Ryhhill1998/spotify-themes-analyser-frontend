import { Skeleton } from "@/components/ui/skeleton";

const TopArtistCardSkeleton = () => {
	return (
		<div className="flex flex-col items-center p-3 hover:bg-stone-800 rounded-sm cursor-pointer">
			<Skeleton className="w-full aspect-square object-cover rounded-full mb-3" />

			<div className="w-full overflow-hidden space-y-1">
				<Skeleton className="h-3 w-full mx-auto" />
			</div>
		</div>
	);
};

export default TopArtistCardSkeleton;
