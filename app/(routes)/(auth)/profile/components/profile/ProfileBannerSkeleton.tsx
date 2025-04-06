import { Skeleton } from "@/components/ui/skeleton";

const ProfileBannerSkeleton = () => {
	return (
		<div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 p-2 py-6 sm:px-6 bg-stone-800 rounded-t-md">
			<Skeleton className="w-[225px] h-[225px] aspect-square object-cover rounded-full" />

			<div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-left w-full">
				<Skeleton className="h-4 w-full max-w-[10%] hidden sm:block" />
				<Skeleton className="h-10 w-full max-w-[50%]" />
				<Skeleton className="h-4 w-full max-w-[20%]" />
			</div>
		</div>
	);
};

export default ProfileBannerSkeleton;
