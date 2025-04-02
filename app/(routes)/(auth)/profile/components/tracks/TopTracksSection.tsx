import TopTrackCard from "@/app/(routes)/(auth)/components/common/TopTrackCard";
import { fetchTopTracks } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";

const TopTracksSection = async () => {
	const topTracks: Track[] = await fetchTopTracks(10);

	return (
		<div className="p-6 pt-2">
			<h3 className="mb-4 text-white font-bold">Your top tracks</h3>

			<div className="h-[330px] overflow-y-scroll no-scrollbar">
				{topTracks.map(
					(
						{
							id,
							name,
							images,
							artist,
							durationFormatted,
							albumName,
						},
						index
					) => (
						<TopTrackCard
							key={id}
							albumImageUrl={images[0].url}
							albumName={albumName}
							trackName={name}
							artistName={artist.name}
							duration={durationFormatted}
							position={index + 1}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default TopTracksSection;
