import { fetchTrack } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import TaggedLyrics from "@/app/(routes)/(auth)/tracks/[trackId]/emotions/[emotionName]/components/TaggedLyrics";
import TrackDetails from "./components/TrackDetails";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import TrackDetailsSkeleton from "./components/TrackDetailsSkeleton";
import TaggedLyricsSkeleton from "./components/TaggedLyricsSkeleton";

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
				<TrackDetailsSkeleton />
				<TaggedLyricsSkeleton />

				<Suspense fallback={<TrackDetailsSkeleton />}>
					<TrackDetails trackId={trackId} />
				</Suspense>

				<Suspense fallback={<TaggedLyricsSkeleton />}>
					<TaggedLyrics trackId={trackId} emotionName={emotionName} />
				</Suspense>
			</div>
		</div>
	);
};

export default EmotionPage;
