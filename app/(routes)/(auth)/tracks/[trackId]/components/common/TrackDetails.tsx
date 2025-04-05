import ListenOnSpotifyButton from "@/app/(routes)/(auth)/components/common/ListenOnSpotifyButton";
import { fetchTrack } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import Image from "next/image";

type TrackDetailsProps = {
	trackId: string;
};

const TrackDetails = async ({ trackId }: TrackDetailsProps) => {
	const track: Track = await fetchTrack(trackId);

	return (
		<div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-8 items-center">
			<Image
				src={track.images[0].url}
				alt="Album image for track"
				width={250}
				height={250}
				className="aspect-square object-cover rounded-md"
			/>

			<div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
				<div className="flex flex-col gap-2">
					<p className="text-white text-3xl font-bold">
						{track.name}
					</p>

					<p className="text-stone-300 text-lg font-bold">
						{track.artist.name}
					</p>

					<p className=" text-stone-400 text-md font-semibold">
						{track.albumName}
					</p>

					<p className=" text-stone-400 text-sm">
						{track.releaseDate.split("-")[0]}
					</p>
				</div>

				<ListenOnSpotifyButton spotifyUrl={track.spotifyUrl} />
			</div>
		</div>
	);
};

export default TrackDetails;
