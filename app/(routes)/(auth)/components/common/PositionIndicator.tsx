type PositionIndicatorProps = {
	position: number;
	positionChange: string | number | null;
};

const PositionIndicator = ({
	position,
	positionChange,
}: PositionIndicatorProps) => {
	return (
		<div className="flex flex-col items-center gap-1 w-[24px]">
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
	);
};

export default PositionIndicator;
