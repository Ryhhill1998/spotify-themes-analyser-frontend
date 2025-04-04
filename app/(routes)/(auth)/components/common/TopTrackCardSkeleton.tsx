import { Skeleton } from "@/components/ui/skeleton";

type TopTrackCardSkeletonProps = {
	position: number;
};

const TopTrackCardSkeleton = ({ position }: TopTrackCardSkeletonProps) => {
	return (
		<div className="flex gap-2 items-center px-3 py-2 w-full hover:bg-stone-800 rounded-sm gap-x-2 cursor-pointer sm:grid sm:grid-cols-[5fr_3fr_1fr]">
			<div className="flex gap-3 items-center w-full">
				<p className="text-stone-300 text-sm">{position}</p>

				<Skeleton className="w-[50px] h-[50px] aspect-square object-cover rounded-sm" />

				<div className="w-full flex flex-col gap-2">
					<Skeleton className="h-3 w-full max-w-[75%]" />

					<Skeleton className="h-2 w-full max-w-[40%]" />
				</div>
			</div>

			<Skeleton className="hidden sm:block h-3 w-full max-w-[60%] justify-self-start" />

			<Skeleton className="h-2 w-full max-w-[10%] sm:max-w-[25%] justify-self-end" />
		</div>
	);
};

export default TopTrackCardSkeleton;
