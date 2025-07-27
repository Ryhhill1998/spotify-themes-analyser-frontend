import PositionIndicator from "@/app/(routes)/(auth)/components/common/PositionIndicator";
import { PercentageTopItem } from "@/app/api/dataTypes";

type TopItemsBarChartProps = {
	topItems: PercentageTopItem[];
};

const TopItemsBarChart = async ({ topItems }: TopItemsBarChartProps) => {
	const max = Math.max(...topItems.map((d) => d.percentage));

	return (
		<div className="bg-black text-white text-sm p-6 rounded-xl space-y-8 w-full">
			{topItems.map(({ name, percentage, positionChange }, index) => (
				<div
					key={name}
					className="grid grid-cols-[150px_1fr] items-center gap-4"
				>
					<div className="flex items-center justify-start">
						<PositionIndicator
							position={index + 1}
							positionChange={positionChange}
						/>

						<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
					</div>
					{/* <div className="truncate">{item.genre}</div> */}
					<div className="bg-white/10 rounded h-8 w-full">
						<div
							className="bg-white h-8 rounded"
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
