import Image from "next/image";

type TopTrackCardProps = {
	albumImageUrl: string;
	trackName: string;
	artistName: string;
	duration: string;
	position: number;
};

const TopTrackCard = ({
	albumImageUrl,
	trackName,
	artistName,
	duration,
	position,
}: TopTrackCardProps) => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex gap-4 items-center">
				<p className="text-stone-300 text-sm">{position}</p>

				<Image
					src={albumImageUrl}
					alt="Track album art"
					width={50}
					height={50}
				/>

				<div>
					<p className="text-white text-sm mb-1 font-bold">
						{trackName.toUpperCase()}
					</p>
					<p className="text-xs text-stone-300">{artistName}</p>
				</div>
			</div>

			<p className="text-stone-300 text-xs">{duration}</p>
		</div>
	);
};

export default TopTrackCard;
