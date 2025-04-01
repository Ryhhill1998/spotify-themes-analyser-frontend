import { Skeleton } from "@/components/ui/skeleton";

const ProfileBannerSkeleton = () => {
	return (
		<div className="flex items-center gap-4 p-6 bg-stone-700 rounded-t-md">
			<Skeleton className="w-[200px] h-[200px] aspect-square object-cover rounded-full" />

			<div className="flex flex-col gap-2 w-full">
				<Skeleton className="h-15 w-full max-w-[25%]" />
				<Skeleton className="h-3 w-full max-w-[35%]" />
				<Skeleton className="h-3 w-full max-w-[10%]" />
			</div>
		</div>
	);
};

export default ProfileBannerSkeleton;
