import TopArtistCard from "@/app/top-artists/components/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";

const TopArtistsPage = async () => {
	const topArtists: Artist[] = await fetchTopArtists();

	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top artists
			</h3>

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
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
