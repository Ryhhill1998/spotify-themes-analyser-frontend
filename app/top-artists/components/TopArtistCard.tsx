import Image from "next/image";

type TopArtistCardProps = {
	imageUrl: string;
	name: string;
};

const TopArtistCard = ({ imageUrl, name }: TopArtistCardProps) => {
	return (
		<div>
			<Image
				src={imageUrl}
				alt="Artist art"
				width={100}
				height={100}
				className="w-[100px] h-[100px] object-cover rounded-full mb-4"
			/>
			<p className="w-[100px] text-center truncate text-white text-xs">
				{name}
			</p>
		</div>
	);
};

export default TopArtistCard;
