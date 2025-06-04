import Image from "next/image";
import Link from "next/link";
import PositionIndicator from "./PositionIndicator";

type TopTrackCardProps = {
	trackId: string;
	albumImageUrl: string;
	albumName: string;
	trackName: string;
	artistName: string;
	duration: string;
	position: number;
	positionChange: string | null;
};

const TopTrackCard = ({
	trackId,
	albumImageUrl,
	albumName,
	trackName,
	artistName,
	duration,
	position,
	positionChange,
}: TopTrackCardProps) => {
	return (
		<Link
			href={`/tracks/${trackId}`}
			className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_1fr_auto] items-center px-3 py-2 hover:bg-stone-800 rounded-sm gap-x-3 cursor-pointer"
		>
			{/* Position + Arrows */}
			<PositionIndicator
				position={position}
				positionChange={positionChange}
			/>

			{/* Image + Track Info */}
			<div className="grid grid-cols-[50px_1fr] items-center gap-3 min-w-0 overflow-hidden">
				<Image
					src={albumImageUrl}
					alt="Track album art"
					width={50}
					height={50}
					className="aspect-square object-cover rounded-sm"
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

			{/* Album Name (Only on sm+) */}
			<div className="min-w-0 overflow-hidden hidden sm:block">
				<p className="text-stone-300 text-sm truncate">{albumName}</p>
			</div>

			{/* Duration */}
			<p className="text-stone-300 text-xs text-right">{duration}</p>
		</Link>
	);
};

export default TopTrackCard;
