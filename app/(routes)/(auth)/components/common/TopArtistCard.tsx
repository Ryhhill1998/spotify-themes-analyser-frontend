import Image from "next/image";
import Link from "next/link";
import PositionIndicator from "./PositionIndicator";

type TopArtistCardProps = {
	artistId: string;
	imageUrl: string;
	name: string;
	position: number;
	positionChange: string | null;
};

const TopArtistCard = ({
	artistId,
	imageUrl,
	name,
	position,
	positionChange,
}: TopArtistCardProps) => {
	if (!imageUrl) {
		imageUrl =
			"https://i.scdn.co/image/ab6761610000e5ebee7ca7e553f57af526bedb5e";
	}

	return (
		<Link
			href={`/artists/${artistId}`}
			className="flex flex-col items-center p-3 hover:bg-stone-800 rounded-sm cursor-pointer h-full"
		>
			<Image
				src={imageUrl}
				alt="Artist art"
				width={300}
				height={300}
				className="aspect-square object-cover rounded-full mb-3"
			/>

			<div className="h-full w-full overflow-hidden flex items-center">
				<PositionIndicator
					position={position}
					positionChange={positionChange}
				/>

				<p className="text-white text-xs font-medium truncate w-full">
					{name}
				</p>
			</div>
		</Link>
	);
};

export default TopArtistCard;
