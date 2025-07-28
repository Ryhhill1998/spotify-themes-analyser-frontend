import PositionIndicator from "@/app/(routes)/(auth)/components/common/PositionIndicator";
import { PercentageTopItem } from "@/app/api/dataTypes";

type TopItemsBarChartProps = {
	topItems: PercentageTopItem[];
};

const TopItemsBarChart = async ({ topItems }: TopItemsBarChartProps) => {
	const max = Math.max(...topItems.map((d) => d.percentage));

	return (
		<div className="px-4 py-6 bg-black text-white text-xs sm:text-sm rounded-xl space-y-6 w-full">
			{topItems.map(({ name, percentage, positionChange }, index) => (
				<div key={name} className="flex items-center">
					<PositionIndicator
						position={index + 1}
						positionChange={positionChange}
					/>

					<p className="basis-[30%] truncate pr-2">
						{name.charAt(0).toUpperCase() + name.slice(1)}
					</p>

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
