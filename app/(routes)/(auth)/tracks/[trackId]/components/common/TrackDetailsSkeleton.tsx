import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft } from "lucide-react";

const TrackDetailsSkeleton = () => {
	return (
		<div className="flex flex-col sm:flex-row w-full gap-6 sm:items-end">
			<div className="flex justify-between gap-4 w-full sm:w-fit sm:flex-col">
				<ChevronLeft
					size={30}
					className="text-white cursor-pointer hover:text-stone-400"
				/>

				<Skeleton className="w-[250px] h-[250px] aspect-square object-cover rounded-sm" />

				<ChevronLeft
					size={30}
					className="text-white cursor-pointer hover:text-stone-400 invisible sm:hidden"
				/>
			</div>

			<div className="flex w-full max-w-[75%] sm:max-w-[50%] flex-col gap-6">
				<div className="flex w-full flex-col gap-4">
					<Skeleton className="h-6 w-full" />
					<Skeleton className="h-4 w-full max-w-[65%]" />
					<Skeleton className="h-4 w-full max-w-[50%]" />
					<Skeleton className="h-4 w-full max-w-[25%]" />
				</div>

				<Skeleton className="h-10 w-[175px] rounded-4xl" />
			</div>
		</div>
	);
};

export default TrackDetailsSkeleton;
