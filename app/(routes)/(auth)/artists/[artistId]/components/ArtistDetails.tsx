import Image from "next/image";

import { fetchArtist } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";
import ListenOnSpotifyButton from "../../../components/common/ListenOnSpotifyButton";

type ArtistDetailsProps = {
	artistId: string;
};

const ArtistDetails = async ({ artistId }: ArtistDetailsProps) => {
	const artist: Artist = await fetchArtist(artistId);

	return (
		<div className="flex gap-2 items-center">
			<Image
				src={artist.images[0].url}
				alt="Artist image"
				width={250}
				height={250}
				className="aspect-square object-cover rounded-md"
			/>

			<div className="flex flex-col gap-4 p-4">
				<div className="flex flex-col gap-2">
					<p className="text-white text-4xl font-bold">
						{artist.name}
					</p>

					<p className=" text-stone-400 text-md font-semibold">
						{artist.followers}
					</p>

					<p className=" text-stone-400 text-sm">
						{artist.popularity}
					</p>
				</div>

				<ListenOnSpotifyButton spotifyUrl={artist.spotifyUrl} />
			</div>
		</div>
	);
};

export default ArtistDetails;
