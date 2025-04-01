import Image from "next/image";

type TopTrackCardProps = {
	albumImageUrl: string;
	albumName: string;
	trackName: string;
	artistName: string;
	duration: string;
	position: number;
};

const TopTrackCard = ({
	albumImageUrl,
	albumName,
	trackName,
	artistName,
	duration,
	position,
}: TopTrackCardProps) => {
	return (
		<div className="grid grid-cols-[6fr_4fr_1fr] items-center px-3 py-2 hover:bg-stone-800 rounded-sm gap-x-2 cursor-pointer">
			<div className="flex gap-3 items-center min-w-0 overflow-hidden">
				<p className="text-stone-300 text-sm text-right">{position}</p>

				<Image
					src={albumImageUrl}
					alt="Track album art"
					width={50}
					height={50}
					className="rounded-sm flex-shrink-0"
				/>

				<div className="min-w-0 overflow-hidden">
					<p className="text-white text-sm mb-1 font-bold truncate">
						{trackName.toUpperCase()}
					</p>

					<p className="text-xs text-stone-300 truncate">
						{artistName}
					</p>
				</div>
			</div>

			<div className="min-w-0 overflow-hidden">
				<p className="text-stone-300 text-sm truncate">{albumName}</p>
			</div>

			<p className="text-stone-300 text-xs text-right">{duration}</p>
		</div>
	);
};

export default TopTrackCard;
