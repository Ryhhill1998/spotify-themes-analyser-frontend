import { Skeleton } from "@/components/ui/skeleton";

const TaggedLyricsSkeleton = () => {
	const lines = [
		["25%", "50%", "75%", "60%", "75%"],
		["60%", "40%", "75%", "50%", "75%", "25%", "40%", "60%"],
		["25%", "50%", "25%", "50%", "35%"],
		["75%", "35%", "60%", "25%", "50%", "40%", "75%", "40%"],
		["50%", "25%", "60%"],
		["75%", "40%", "75%", "50%", "60%", "25%", "50%", "75%", "40%", "50%"],
	];

	return (
		<div className="w-full max-w-[500px] flex flex-col gap-10">
			{lines.map((verse, verseIndex) => (
				<div
					key={`verse-${verseIndex}`}
					className="w-full flex flex-col items-center gap-2"
				>
					{verse.map((width, lineIndex) => (
						<Skeleton
							key={`lyric-${verseIndex}-${lineIndex}`}
							className="h-4 w-full"
							style={{ maxWidth: width }}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default TaggedLyricsSkeleton;
