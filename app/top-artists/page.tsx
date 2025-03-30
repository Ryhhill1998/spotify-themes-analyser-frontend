import TopArtistCard from "@/app/top-artists/components/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";

const TopArtistsPage = async () => {
	const topArtists: Artist[] = await fetchTopArtists();

	return (
		<div className="container bg-stone-900 mx-auto p-4 rounded-md">
			<div className="grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-5">
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
