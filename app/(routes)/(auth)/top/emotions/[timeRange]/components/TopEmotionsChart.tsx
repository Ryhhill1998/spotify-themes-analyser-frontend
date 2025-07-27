import TopItemsBarChart from "@/app/(routes)/(auth)/components/common/TopItemsBarChart";
import { fetchTopEmotions } from "@/app/api/data";
import { PercentageTopItem } from "@/app/api/dataTypes";

type TopEmotionsChartProps = {
	timeRange: string;
};

const TopEmotionsChart = async ({ timeRange }: TopEmotionsChartProps) => {
	const topEmotions: PercentageTopItem[] = await fetchTopEmotions(timeRange);

	return <TopItemsBarChart topItems={topEmotions} />;
};

export default TopEmotionsChart;
