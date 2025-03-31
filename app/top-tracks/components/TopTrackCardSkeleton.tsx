import { Skeleton } from "@/components/ui/skeleton";

type TopTrackCardSkeletonProps = {
	position: number;
};

const TopTrackCardSkeleton = ({ position }: TopTrackCardSkeletonProps) => {
	return (
		<div className="grid grid-cols-[6fr_4fr_1fr] items-center px-3 py-2 hover:bg-stone-800 rounded-sm gap-x-2 cursor-pointer">
			<div className="flex gap-3 items-center">
				<p className="text-stone-300 text-sm">{position}</p>

				<Skeleton className="w-[50px] h-[50px] aspect-square object-cover rounded-sm" />

				<div className="w-full flex flex-col gap-2">
					<Skeleton className="h-3 w-full max-w-[50%]" />

					<Skeleton className="h-2 w-full max-w-[35%]" />
				</div>
			</div>

			<Skeleton className="h-3 w-full max-w-[60%] justify-self-start" />

			<Skeleton className="h-2 w-full max-w-[25%] justify-self-end" />
		</div>
	);
};

export default TopTrackCardSkeleton;
