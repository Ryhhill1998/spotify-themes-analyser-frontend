import Image from "next/image";
import Link from "next/link";

type TopArtistCardProps = {
	artistId: string;
	imageUrl: string;
	name: string;
};

const TopArtistCard = ({ artistId, imageUrl, name }: TopArtistCardProps) => {
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

			<div className="w-full overflow-hidden">
				<p className="text-center truncate text-white text-sm font-medium">
					{name}
				</p>
			</div>
		</Link>
	);
};

export default TopArtistCard;
