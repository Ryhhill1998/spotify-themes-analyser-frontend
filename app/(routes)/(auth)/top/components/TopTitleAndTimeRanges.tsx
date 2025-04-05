"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

type TopTitleProps = {
	name: string;
};

const timeRanges = [
	{ label: "1 Month", value: "short" },
	{ label: "6 Months", value: "medium" },
	{ label: "12 Months", value: "long" },
];

const TopTitleAndTimeRanges = ({ name }: TopTitleProps) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const isActive = (value: string) => searchParams.get("history") === value;

	return (
		<div className="flex items-center flex-col gap-4 sm:flex-row sm:justify-between mb-6">
			<h3 className="text-white font-bold text-2xl">Your top {name}</h3>

			<div className="flex gap-2">
				{timeRanges.map(({ label, value }, index) => (
					<Button
						key={`history=${index}`}
						className={`text-white text-sm font-medium px-4 py-2 hover:bg-stone-700 rounded-md ${
							isActive(value) ? "bg-stone-700" : ""
						}`}
						onClick={() =>
							router.replace(`/top/${name}/?history=${value}`)
						}
					>
						{label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default TopTitleAndTimeRanges;
