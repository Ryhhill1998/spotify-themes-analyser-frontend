import TopArtistCard from "@/app/top-artists/components/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";

const TopArtistsPage = async () => {
	const topArtists: Artist[] = await fetchTopArtists();

	return (
		<div>
			<div className="flex gap-2">
				{topArtists.map(({ id, name, images }) => (
					<TopArtistCard
						key={id}
						imageUrl={images[0].url}
						name={name}
					/>
				))}
			</div>
		</div>
	);
};

export default TopArtistsPage;
