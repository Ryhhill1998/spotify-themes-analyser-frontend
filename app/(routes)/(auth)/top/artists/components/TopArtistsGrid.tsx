import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";

type TopArtistsGridProps = {
	history: string;
};

const TopArtistsGrid = async ({ history }: TopArtistsGridProps) => {
	const topArtists: Artist[] = await fetchTopArtists(history);

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
