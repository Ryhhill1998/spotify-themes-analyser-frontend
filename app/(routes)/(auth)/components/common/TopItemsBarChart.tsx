import PositionIndicator from "@/app/(routes)/(auth)/components/common/PositionIndicator";
import { PercentageTopItem } from "@/app/api/dataTypes";

type TopItemsBarChartProps = {
	topItems: PercentageTopItem[];
};

const TopItemsBarChart = async ({ topItems }: TopItemsBarChartProps) => {
	const max = Math.max(...topItems.map((d) => d.percentage));

	return (
		<div className="bg-black text-white text-xs sm:text-sm sm:p-6 px-4 py-6 rounded-xl space-y-8 w-full">
			{topItems.map(({ name, percentage, positionChange }, index) => (
				<div
					key={name}
					className="grid grid-cols-[auto_minmax(0,_25%)_1fr] items-center" // Changed 10px to auto for PositionIndicator
				>
					{/* PositionIndicator: Ensure it has appropriate width or styling if needed */}
					<PositionIndicator
						position={index + 1}
						positionChange={positionChange}
					/>

					{/* Name: Apply truncation classes and optional margin */}
					<p className="truncate pr-2">
						{" "}
						{/* Added ml-2 for spacing and 'truncate' class */}
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</p>

					{/* Bar */}
					<div className="bg-white/10 rounded sm:h-8 h-6 w-full">
						<div
							className="bg-white sm:h-8 h-6 rounded"
							style={{
								width: `${(percentage / max) * 100}%`,
							}}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default TopItemsBarChart;
