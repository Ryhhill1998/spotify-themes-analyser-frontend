import { fetchArtist } from "@/app/api/data";
import { Artist } from "@/app/api/dataTypes";
import SpotifyButton from "../../../components/common/SpotifyButton";
import BackButtonAndImage from "../../../components/common/BackButtonAndImage";

type ArtistDetailsProps = {
	artistId: string;
};

const ArtistDetails = async ({ artistId }: ArtistDetailsProps) => {
	const artist: Artist = await fetchArtist(artistId);

	return (
		<div className="flex flex-col sm:flex-row w-full gap-6 sm:items-end">
			<BackButtonAndImage
				imageUrl={artist.images[0].url}
				alt={artist.name}
			/>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<p className="text-white text-2xl sm:text-4xl font-bold">
						{artist.name}
					</p>

					<div className="font-semibold flex flex-col sm:flex-row gap-2">
						<p className="text-md text-stone-400">Followers</p>

						<p className="text-md text-white">
							{artist.followers.toLocaleString()}
						</p>
					</div>

					<div className="font-semibold flex flex-col sm:flex-row gap-2">
						<p className="text-md text-stone-400">Popularity</p>

						<p className="text-md text-white">
							{artist.popularity}%
						</p>
					</div>

					{artist.genres.length > 0 && (
						<div className="font-semibold flex gap-2 flex-col sm:flex-row">
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

				<SpotifyButton
					text="Listen on Spotify"
					spotifyUrl={artist.spotifyUrl}
				/>
			</div>
		</div>
	);
};

export default ArtistDetails;
