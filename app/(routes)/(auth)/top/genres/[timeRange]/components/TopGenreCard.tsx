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
		<div className="flex justify-between items-center p-4 rounded-md text-white text-sm">
			<div className="flex gap-2 items-center">
				<PositionIndicator
					position={position}
					positionChange={positionChange}
				/>

				<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
			</div>

			<p>{percentage} %</p>
		</div>
	);
};

export default TopGenreCard;
