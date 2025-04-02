import Link from "next/link";

type TopTitleProps = {
	name: string;
};

const timeRanges = [
	{ label: "1 Month", value: "short-term" },
	{ label: "6 Months", value: "medium-term" },
	{ label: "12 Months", value: "long-term" },
];

const TopTitleAndTimeRanges = ({ name }: TopTitleProps) => {
	return (
		<div className="flex justify-between items-center">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top {name}
			</h3>

			<div className="flex gap-2">
				{timeRanges.map(({ label, value }, index) => (
					<Link
						key={`time-range=${index}`}
						href={`/top/${name}/?time-range=${value}`}
						className="text-white text-sm font-medium px-4 py-2 hover:bg-stone-700 rounded-md"
					>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default TopTitleAndTimeRanges;
