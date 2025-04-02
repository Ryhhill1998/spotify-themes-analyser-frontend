import { Skeleton } from "@/components/ui/skeleton";

const ArtistDetailsSkeleton = () => {
	return (
		<div className="flex gap-2 p-6 w-full mx-auto">
			<Skeleton className="w-[250px] h-[250px] aspect-square object-cover rounded-sm" />

			<div className="flex w-full max-w-[25%] flex-col gap-8 p-4">
				<div className="flex w-full flex-col gap-4">
					<Skeleton className="h-6 w-full" />
					<Skeleton className="h-4 w-full max-w-[60%]" />
					<Skeleton className="h-4 w-full max-w-[40%]" />
					<Skeleton className="h-4 w-full max-w-[75%]" />
				</div>

				<Skeleton className="h-10 w-full max-w-[60%] rounded-4xl" />
			</div>
		</div>
	);
};

export default ArtistDetailsSkeleton;
