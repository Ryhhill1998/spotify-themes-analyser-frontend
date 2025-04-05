import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { fetchTopArtists } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";

type TopArtistsGridProps = {
	timeRange: string;
};

const TopArtistsGrid = async ({ timeRange }: TopArtistsGridProps) => {
	const topArtists: Artist[] = await fetchTopArtists(timeRange);

	return (
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
	);
};

export default TopArtistsGrid;
