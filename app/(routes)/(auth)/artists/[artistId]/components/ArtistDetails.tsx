import Image from "next/image";

import { fetchArtist } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";
import ListenOnSpotifyButton from "../../../components/common/ListenOnSpotifyButton";

type ArtistDetailsProps = {
	artistId: string;
};

const ArtistDetails = async ({ artistId }: ArtistDetailsProps) => {
	const artist: Artist = await fetchArtist(artistId);

	console.log({ genres: artist.genres.length > 1 });

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

					<div className="font-semibold flex gap-2 items-center">
						<p className="text-md text-stone-400">Followers</p>

						<p className="text-md text-white">
							{artist.followers.toLocaleString()}
						</p>
					</div>

					<div className="font-semibold flex gap-2 items-center">
						<p className="text-md text-stone-400">Popularity</p>

						<p className="text-md text-white">
							{artist.popularity}%
						</p>
					</div>

					{artist.genres.length > 0 && (
						<div className="font-semibold flex gap-2 items-center">
							<p className="text-md text-stone-400">Genres</p>

							<p className="text-md text-white">
								{artist.genres.join(", ")}
							</p>
						</div>
					)}
				</div>

				<ListenOnSpotifyButton spotifyUrl={artist.spotifyUrl} />
			</div>
		</div>
	);
};

export default ArtistDetails;
