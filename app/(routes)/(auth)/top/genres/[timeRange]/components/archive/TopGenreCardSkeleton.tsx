import { Skeleton } from "@/components/ui/skeleton";

type TopGenreCardSkeletonProps = {
	position: number;
};

const TopGenreCardSkeleton = ({ position }: TopGenreCardSkeletonProps) => {
	return (
		<div className="flex justify-between items-center p-4 rounded-md hover:bg-stone-700 cursor-pointer">
			<div className="w-full flex gap-2 items-center">
				<p className="text-white text-sm">{position}</p>

				<Skeleton className="h-3 w-full max-w-[10%]" />
			</div>

			<Skeleton className="h-3 w-full max-w-[5%]" />
		</div>
	);
};

export default TopGenreCardSkeleton;
