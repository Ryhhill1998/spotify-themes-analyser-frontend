import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";
import TopTitleAndTimeRanges from "../components/TopTitleAndTimeRanges";

const TopArtistsPage = async ({
	searchParams,
}: {
	searchParams?: Promise<{ history: string }>;
}) => {
	const search = await searchParams;
	const history = search?.history ?? "short";

	const topArtists: Artist[] = await fetchTopArtists(history);

	return (
		<>
			<TopTitleAndTimeRanges name="artists" />

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
				{topArtists.map(({ id, name, images }) => (
					<TopArtistCard
						key={id}
						artistId={id}
						imageUrl={images[0].url}
						name={name}
					/>
				))}
			</div>
		</>
	);
};

export default TopArtistsPage;
