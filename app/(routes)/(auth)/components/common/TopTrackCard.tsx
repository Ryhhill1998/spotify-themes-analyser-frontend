import Image from "next/image";
import Link from "next/link";

type TopTrackCardProps = {
	trackId: string;
	albumImageUrl: string;
	albumName: string;
	trackName: string;
	artistName: string;
	duration: string;
	position: number;
	positionChange: string | number | null;
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
			<div className="grid place-items-center gap-1 w-[24px]">
				{typeof positionChange === "number" && positionChange > 0 && (
					<div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-green-500" />
				)}
				{typeof positionChange === "number" && positionChange < 0 && (
					<div className="invisible w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500" />
				)}
				{positionChange === "new" && (
					<div className="invisible h-[7px] w-[7px] rounded-full bg-blue-300" />
				)}

				<p className="text-stone-200 text-xs font-bold text-center">
					{position}
				</p>

				{typeof positionChange === "number" && positionChange > 0 && (
					<div className="invisible w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-green-500" />
				)}
				{typeof positionChange === "number" && positionChange < 0 && (
					<div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-red-500" />
				)}
				{positionChange === "new" && (
					<div className="h-[7px] w-[7px] rounded-full bg-blue-300" />
				)}
			</div>

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
