import Image from "next/image";

type TopTrackCardProps = {
	albumImageUrl: string;
	trackName: string;
	artistName: string;
};

const TopTrackCard = ({
	albumImageUrl,
	trackName,
	artistName,
}: TopTrackCardProps) => {
	return (
		<div>
			<Image
				src={albumImageUrl}
				alt="Track album art"
				width={50}
				height={50}
			/>
			<p className="text-white">{trackName}</p>
			<p className="text-white">{artistName}</p>
		</div>
	);
};

export default TopTrackCard;
