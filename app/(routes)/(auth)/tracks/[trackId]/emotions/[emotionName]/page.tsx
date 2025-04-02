import { fetchTrack } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import TaggedLyrics from "@/app/(routes)/(auth)/tracks/[trackId]/emotions/[emotionName]/components/TaggedLyrics";
import TrackDetails from "../../components/common/TrackDetails";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import TrackDetailsSkeleton from "../../components/common/TrackDetailsSkeleton";
import TaggedLyricsSkeleton from "./components/TaggedLyricsSkeleton";

const EmotionPage = async ({
	params,
}: {
	params: Promise<{ trackId: string; emotionName: string }>;
}) => {
	const { trackId, emotionName } = await params;

	return (
		<div className="container mx-auto bg-stone-900 rounded-md">
			<div className="flex justify-between p-6 pb-0">
				<Link
					href="/top/emotions"
					className="text-white font-bold text-lg flex gap-2 items-center"
				>
					<ChevronLeft />

					<p>Back</p>
				</Link>

				<h1 className="text-white font-bold text-2xl">
					Your Top{" "}
					{emotionName.charAt(0).toUpperCase() + emotionName.slice(1)}{" "}
					Track
				</h1>

				<Link
					href="/top-emotions"
					className="invisible text-white font-bold text-lg flex gap-2 items-center"
				>
					<ChevronLeft />

					<p>Back</p>
				</Link>
			</div>

			<div>
				<div className="w-full p-6 flex">
					<Suspense fallback={<TrackDetailsSkeleton />}>
						<TrackDetails trackId={trackId} />
					</Suspense>
				</div>

				<div className="w-full bg-stone-800 flex p-6">
					<Suspense fallback={<TaggedLyricsSkeleton />}>
						<TaggedLyrics
							trackId={trackId}
							emotionName={emotionName}
						/>
					</Suspense>
				</div>
			</div>
		</div>
	);
};

export default EmotionPage;
