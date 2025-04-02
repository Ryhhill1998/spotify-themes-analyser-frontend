import { fetchTopArtists } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";
import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";

const TopArtistsSection = async () => {
	const topArtists: Artist[] = await fetchTopArtists(10);

	return (
		<div className="p-6">
			<h3 className="mb-4 text-white font-bold">Your top artists</h3>

			<div className="flex overflow-x-auto no-scrollbar">
				{topArtists.map(({ id, name, images }) => (
					<div key={id} className="flex-shrink-0 w-[160px]">
						<TopArtistCard imageUrl={images[0].url} name={name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default TopArtistsSection;
