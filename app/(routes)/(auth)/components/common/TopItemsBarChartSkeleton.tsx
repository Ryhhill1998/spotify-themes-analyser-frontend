import { Skeleton } from "@/components/ui/skeleton";

const TopItemsBarChartSkeleton = () => {
	return (
		<div className="p-4 py-6 bg-black text-white text-xs sm:text-sm rounded-xl space-y-6 w-full">
			{[...Array(5)].map((_, index) => (
				<div key={index} className="flex items-center">
					<p className="text-stone-200 text-xs font-bold text-center p-2">
						{index + 1}
					</p>

					<Skeleton className="h-4 w-24 mr-2" />

					<div className="bg-white/10 rounded sm:h-8 h-6 w-full">
						<Skeleton
							className="bg-white sm:h-8 h-6 rounded"
							style={{
								width: `${100 - index * 15}%`,
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default TopItemsBarChartSkeleton;
