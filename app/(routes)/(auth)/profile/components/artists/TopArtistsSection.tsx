import { fetchTopArtists } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";
import TopArtistCard from "@/app/(routes)/(auth)/components/common/TopArtistCard";
import TitleAndShowAllLink from "../TitleAndShowAllLink";

const TopArtistsSection = async () => {
	const topArtists: Artist[] = await fetchTopArtists("short_term", 10);

	return (
		<div className="p-6">
			<TitleAndShowAllLink name="artists" />

			<div className="flex overflow-x-auto no-scrollbar">
				{topArtists.map(
					({ id, name, images, positionChange }, index) => (
						<div key={id} className="flex-shrink-0 w-[160px]">
							<TopArtistCard
								artistId={id}
								imageUrl={images[0]?.url}
								name={name}
								position={index + 1}
								positionChange={positionChange}
							/>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default TopArtistsSection;
