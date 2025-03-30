import Image from "next/image";

type TopArtistCardProps = {
	imageUrl: string;
	name: string;
};

const TopArtistCard = ({ imageUrl, name }: TopArtistCardProps) => {
	return (
		<div className="flex flex-col items-center">
			<Image
				src={imageUrl}
				alt="Artist art"
				width={200}
				height={200}
				className="w-full h-auto aspect-square object-cover rounded-full mb-4"
			/>

			<p className="w-[100px] text-center truncate text-white text-xs">
				{name}
			</p>
		</div>
	);
};

export default TopArtistCard;
