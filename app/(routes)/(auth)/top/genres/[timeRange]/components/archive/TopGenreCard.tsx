import PositionIndicator from "@/app/(routes)/(auth)/components/common/PositionIndicator";

type TopGenreCardProps = {
	name: string;
	percentage: number;
	position: number;
	positionChange: string | null;
};

const TopGenreCard = ({
	name,
	percentage,
	position,
	positionChange,
}: TopGenreCardProps) => {
	return (
		<div className="flex gap-5 items-center rounded-md text-white text-sm">
			<div className="flex gap-2 items-center min-w-[5%] max-w-[10%] justify-start">
				<PositionIndicator
					position={position}
					positionChange={positionChange}
				/>

				<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
			</div>

			<div className="w-[85%] bg-white h-8 rounded-xs">{percentage}</div>
		</div>
	);
};

export default TopGenreCard;
