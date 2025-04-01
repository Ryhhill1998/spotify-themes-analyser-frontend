"use client";

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

type TopEmotionCardProps = {
	name: string;
	percentage: number;
	trackId: string;
};

const TopEmotionCard = ({ name, percentage, trackId }: TopEmotionCardProps) => {
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/tracks/${trackId}/emotions/${name}`);
	};

	return (
		<div
			className="flex justify-between items-center p-4 rounded-md text-white hover:bg-stone-700 text-sm cursor-pointer"
			onClick={handleCardClick}
		>
			<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>

			<div className="flex gap-4 items-center">
				<p>{percentage} %</p>

				<ChevronRight />
			</div>
		</div>
	);
};

export default TopEmotionCard;
