import { Skeleton } from "@/components/ui/skeleton";

const TopItemsBarChartSkeleton = () => {
	return (
		<div className="bg-black text-white text-sm p-6 rounded-xl space-y-8 w-full">
			{[...Array(5)].map((_, index) => (
				<div
					key={index}
					className="grid grid-cols-[150px_1fr] items-center gap-4"
				>
					<div className="flex items-center gap-3">
						<p className="text-white text-sm">{index + 1}</p>
						{/* PositionIndicator placeholder */}
						<Skeleton className="h-4 w-24" /> {/* Genre name */}
					</div>
					<div className="bg-white/10 rounded h-8 w-full">
						<Skeleton
							className="h-8 rounded"
							style={{
								width: `${100 - index * 10}%`, // fake bar width gradient
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default TopItemsBarChartSkeleton;
