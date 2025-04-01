import { fetchTrack } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import Image from "next/image";
import Link from "next/link";

type TrackDetailsProps = {
	trackId: string;
};

const TrackDetails = async ({ trackId }: TrackDetailsProps) => {
	const track: Track = await fetchTrack(trackId);

	return (
		<div className="flex gap-2 items-center p-6">
			<Image
				src={track.images[0].url}
				alt={"Album image for track"}
				width={250}
				height={250}
				className="rounded-md"
			/>

			<div className="flex flex-col gap-4 p-4">
				<div className="flex flex-col gap-2">
					<p className="text-white text-4xl font-bold">
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

				<Link
					href={track.spotifyUrl}
					className="bg-stone-700 hover:bg-stone-600 text-stone-100 text-sm w-fit px-4 py-3 rounded-4xl font-semibold flex gap-2 items-center"
				>
					<Image
						src="/spotify-icon-dark-mode.svg"
						alt="Spotify"
						width={22}
						height={22}
					/>

					{"Play on Spotify"}
				</Link>
			</div>
		</div>
	);
};

export default TrackDetails;
