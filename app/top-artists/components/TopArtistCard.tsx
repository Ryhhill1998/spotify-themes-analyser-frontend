import Image from "next/image";

type TopArtistCardProps = {
	imageUrl: string;
	name: string;
};

const TopArtistCard = ({ imageUrl, name }: TopArtistCardProps) => {
	return (
		<div>
			<Image src={imageUrl} alt="Artist art" width={50} height={50} />
			<p className="text-white">{name}</p>
		</div>
	);
};

export default TopArtistCard;
