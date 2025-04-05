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
		<div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-8 items-center">
			<Image
				src={artist.images[0].url}
				alt="Artist image"
				width={250}
				height={250}
				className="aspect-square object-cover rounded-md"
			/>

			<div className="flex flex-col gap-4 items-center sm:items-start text-center sm:text-left">
				<div className="flex flex-col gap-2">
					<p className="text-white text-4xl font-bold">
						{artist.name}
					</p>

					<div className="font-semibold flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-start">
						<p className="text-md text-stone-400">Followers</p>

						<p className="text-md text-white">
							{artist.followers.toLocaleString()}
						</p>
					</div>

					<div className="font-semibold flex flex-col sm:flex-row gap-2 items-center justify-center sm:justify-start">
						<p className="text-md text-stone-400">Popularity</p>

						<p className="text-md text-white">
							{artist.popularity}%
						</p>
					</div>

					{artist.genres.length > 0 && (
						<div className="font-semibold flex gap-2 flex-col sm:flex-row items-center justify-center sm:justify-start">
							<p className="text-md text-stone-400">Genres</p>

							{artist.genres.map((genre, index) => (
								<div
									key={`${genre}-${index}`}
									className="flex gap-2 items-center"
								>
									{index > 0 && (
										<span className="hidden sm:inline before:content-['•'] before:text-stone-400 align-middle"></span>
									)}
									<p className="text-md text-white">
										{genre}
									</p>
								</div>
							))}
						</div>
					)}
				</div>

				<ListenOnSpotifyButton spotifyUrl={artist.spotifyUrl} />
			</div>
		</div>
	);
};

export default ArtistDetails;
