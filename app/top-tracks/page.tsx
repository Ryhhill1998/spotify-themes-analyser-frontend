import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import TopTrackCard from "@/app/top-tracks/components/TopTrackCard";

const TopTracks = async () => {
	const topTracks: Track[] = await fetchTopTracks();

	return (
		<div>
			<div className="flex gap-2">
				{topTracks.map(({ id, name, images, artist }) => (
					<TopTrackCard
						key={id}
						albumImageUrl={images[0].url}
						trackName={name}
						artistName={artist.name}
					/>
				))}
			</div>
		</div>
	);
};

export default TopTracks;
