import TopItemsBarChart from "@/app/(routes)/(auth)/components/common/TopItemsBarChart";
import { fetchTopGenres } from "@/app/api/data";
import { PercentageTopItem } from "@/app/api/dataTypes";

type TopGenreChartProps = {
	timeRange: string;
};

const TopGenresChart = async ({ timeRange }: TopGenreChartProps) => {
	const topGenres: PercentageTopItem[] = await fetchTopGenres(timeRange);

	return <TopItemsBarChart topItems={topGenres} />;
};

export default TopGenresChart;
