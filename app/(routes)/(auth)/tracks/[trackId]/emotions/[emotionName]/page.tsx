import { fetchTrack } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import TaggedLyrics from "@/app/(routes)/(auth)/tracks/[trackId]/emotions/[emotionName]/components/TaggedLyrics";
import TrackDetails from "./components/TrackDetails";
import { Separator } from "@/components/ui/separator";

const EmotionPage = async ({
	params,
}: {
	params: Promise<{ trackId: string; emotionName: string }>;
}) => {
	const { trackId, emotionName } = await params;

	return (
		<div className="container mx-auto bg-stone-900 rounded-md">
			<Link
				href="/top-emotions"
				className="text-white font-bold text-2xl flex gap-2 items-center p-6"
			>
				<ChevronLeft />

				<h1>
					Your Top{" "}
					{emotionName.charAt(0).toUpperCase() + emotionName.slice(1)}{" "}
					Track
				</h1>
			</Link>

			<div className="flex flex-col gap-8 justify-center items-center">
				<TrackDetails trackId={trackId} />

				<TaggedLyrics trackId={trackId} emotionName={emotionName} />
			</div>
		</div>
	);
};

export default EmotionPage;
