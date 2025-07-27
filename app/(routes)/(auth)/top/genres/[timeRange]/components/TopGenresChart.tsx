import PositionIndicator from "@/app/(routes)/(auth)/components/common/PositionIndicator";
import { fetchTopGenres } from "@/app/api/data";
import { Genre } from "@/app/api/dataTypes";

type TopGenreChartProps = {
	timeRange: string;
};

const TopGenresChart = async ({ timeRange }: TopGenreChartProps) => {
	const topGenres: Genre[] = await fetchTopGenres(timeRange);
	const max = Math.max(...topGenres.map((d) => d.percentage));

	return (
		<div className="bg-black text-white text-sm p-6 rounded-xl space-y-8 w-full">
			{topGenres.map(({ name, percentage, positionChange }, index) => (
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

export default TopGenresChart;
