import TaggedLyrics from "@/app/(routes)/(auth)/tracks/[trackId]/emotions/[emotionName]/components/TaggedLyrics";
import TrackDetails from "../../components/common/TrackDetails";
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
			<div>
				<div className="w-full p-6 flex">
					<Suspense fallback={<TrackDetailsSkeleton />}>
						<TrackDetails trackId={trackId} />
					</Suspense>
				</div>

				<div className="w-full bg-stone-800 flex p-6 gap-4 flex-col">
					<h3 className="text-white font-bold text-2xl">
						Lyrics (
						{emotionName.charAt(0).toUpperCase() +
							emotionName.slice(1)}
						)
					</h3>

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
