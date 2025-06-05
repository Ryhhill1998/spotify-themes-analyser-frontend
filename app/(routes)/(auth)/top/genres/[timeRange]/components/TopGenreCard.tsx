type TopGenreCardProps = {
	name: string;
	percentage: number;
	position: number;
};

const TopGenreCard = ({ name, percentage, position }: TopGenreCardProps) => {
	return (
		<div className="flex justify-between items-center p-4 rounded-md text-white text-sm">
			<div className="flex gap-2">
				<p>{position}</p>

				<p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
			</div>

			<p>{percentage} %</p>
		</div>
	);
};

export default TopGenreCard;
