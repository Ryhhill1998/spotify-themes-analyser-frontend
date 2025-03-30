import Image from "next/image";

type TopArtistCardProps = {
	imageUrl: string;
	name: string;
};

const TopArtistCard = ({ imageUrl, name }: TopArtistCardProps) => {
	return (
		<div className="flex flex-col items-center p-3 hover:bg-stone-800 rounded-sm cursor-pointer">
			<Image
				src={imageUrl}
				alt="Artist art"
				width={300}
				height={300}
				className="w-full h-auto aspect-square object-cover rounded-full mb-3"
			/>

			<p className="w-[200px] text-center truncate text-white text-sm font-medium">
				{name}
			</p>
		</div>
	);
};

export default TopArtistCard;
