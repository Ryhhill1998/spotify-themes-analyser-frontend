import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import { Artist } from "@/app/api/dataTypes";
import { fetchTopArtists } from "@/app/api/data";
import TopTitle from "../components/TopTitle";

const TopArtistsPage = async () => {
	const topArtists: Artist[] = await fetchTopArtists();

	return (
		<>
			<TopTitle name="artists" />

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
				{topArtists.map(({ id, name, images }) => (
					<TopArtistCard
						key={id}
						imageUrl={images[0].url}
						name={name}
					/>
				))}
			</div>
		</>
	);
};

export default TopArtistsPage;
