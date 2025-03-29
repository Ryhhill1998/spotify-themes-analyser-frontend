"use client";

import { useRouter } from "next/navigation";

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
			className="flex justify-between p-4 rounded-md text-white hover:bg-gray-800 text-sm"
			onClick={handleCardClick}
		>
			<p>{name}</p>
			<p>{percentage} %</p>
		</div>
	);
};

export default TopEmotionCard;
