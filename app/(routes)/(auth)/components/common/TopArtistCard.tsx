import Image from "next/image";
import Link from "next/link";
import PositionIndicator from "./PositionIndicator";

type TopArtistCardProps = {
	artistId: string;
	imageUrl: string;
	name: string;
	position: number;
	positionChange: string | number | null;
};

const TopArtistCard = ({
	artistId,
	imageUrl,
	name,
	position,
	positionChange,
}: TopArtistCardProps) => {
	return (
		<Link
			href={`/artists/${artistId}`}
			className="flex flex-col items-center p-3 hover:bg-stone-800 rounded-sm cursor-pointer"
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

				<p className="text-center truncate text-white text-xs font-medium h-full flex items-center">
					{name}
				</p>
			</div>
		</Link>
	);
};

export default TopArtistCard;
