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
};

const TopTrackCard = ({
	trackId,
	albumImageUrl,
	albumName,
	trackName,
	artistName,
	duration,
	position,
}: TopTrackCardProps) => {
	return (
		<Link
			href={`/tracks/${trackId}`}
			className="grid grid-cols-[6fr_1fr] sm:grid-cols-[6fr_4fr_1fr] items-center px-3 py-2 hover:bg-stone-800 rounded-sm gap-x-2 cursor-pointer"
		>
			<div className="flex gap-3 items-center min-w-0 overflow-hidden">
				<p className="text-stone-300 text-sm text-right">{position}</p>

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

			<div className="min-w-0 overflow-hidden hidden sm:block">
				<p className="text-stone-300 text-sm truncate">{albumName}</p>
			</div>

			<p className="text-stone-300 text-xs text-right">{duration}</p>
		</Link>
	);
};

export default TopTrackCard;
