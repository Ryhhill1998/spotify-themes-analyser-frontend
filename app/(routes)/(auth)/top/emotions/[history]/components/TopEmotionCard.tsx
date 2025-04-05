import { ChevronRight } from "lucide-react";
import Link from "next/link";

type TopEmotionCardProps = {
	name: string;
	percentage: number;
	trackId: string;
	position: number;
};

const TopEmotionCard = ({
	name,
	percentage,
	trackId,
	position,
}: TopEmotionCardProps) => {
	return (
		<Link
			className="flex justify-between items-center p-4 rounded-md text-white hover:bg-stone-700 text-sm cursor-pointer"
			href={`/tracks/${trackId}/emotions/${name}`}
		>
			<div className="flex gap-2">
				<p>{position}</p>

				<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
			</div>

			<div className="flex gap-4 items-center">
				<p>{percentage} %</p>

				<ChevronRight />
			</div>
		</Link>
	);
};

export default TopEmotionCard;
