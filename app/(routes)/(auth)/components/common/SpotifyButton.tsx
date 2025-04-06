import Image from "next/image";
import Link from "next/link";

type PlayOnSpotifyButtonProps = {
	text: string;
	spotifyUrl: string;
};

const SpotifyButton = ({ text, spotifyUrl }: PlayOnSpotifyButtonProps) => {
	return (
		<Link
			href={spotifyUrl}
			className="bg-stone-700 hover:bg-stone-600 text-stone-100 text-sm w-fit px-4 py-3 rounded-4xl font-semibold flex gap-2 items-center"
		>
			<Image
				src="/spotify-icon-dark-mode.svg"
				alt="Spotify"
				width={22}
				height={22}
			/>
			{text}
		</Link>
	);
};

export default SpotifyButton;
