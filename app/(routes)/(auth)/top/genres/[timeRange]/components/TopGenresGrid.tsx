import { fetchTopGenres } from "@/app/api/data";
import { Genre } from "@/app/api/dataTypes";
import TopGenreCard from "./TopGenreCard";

type TopGenresGridProps = {
	timeRange: string;
};

const TopGenresGrid = async ({ timeRange }: TopGenresGridProps) => {
	const topGenres: Genre[] = await fetchTopGenres(timeRange);

	return (
		<div className="container mx-auto flex flex-col gap-2">
			{topGenres.map(({ name, percentage, positionChange }, index) => (
				<TopGenreCard
					key={name}
					name={name}
					percentage={percentage}
					position={index + 1}
					positionChange={positionChange}
				/>
			))}
		</div>
	);
};

export default TopGenresGrid;
