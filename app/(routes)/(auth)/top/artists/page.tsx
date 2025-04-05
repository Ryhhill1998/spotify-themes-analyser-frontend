import { Suspense } from "react";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";
import TopArtistsGrid from "./components/TopArtistsGrid";
import TopArtistsGridSkeleton from "./components/TopArtistsGridSkeleton";

const TopArtistsPage = async ({
	searchParams,
}: {
	searchParams?: Promise<{ history: string }>;
}) => {
	const search = await searchParams;
	const history = search?.history ?? "short";

	return (
		<>
			<TopTitleAndTimeRanges name="artists" />

			<Suspense fallback={<TopArtistsGridSkeleton />}>
				<TopArtistsGrid history={history} />
			</Suspense>
		</>
	);
};

export default TopArtistsPage;
