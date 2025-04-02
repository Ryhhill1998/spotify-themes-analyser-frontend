import { Suspense } from "react";
import TrackDetails from "./components/common/TrackDetails";
import TrackDetailsSkeleton from "./components/common/TrackDetailsSkeleton";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const TrackPage = async ({
	params,
}: {
	params: Promise<{ trackId: string }>;
}) => {
	const { trackId } = await params;

	return (
		<div className="container mx-auto bg-stone-900 rounded-md">
			<div className="p-6 pb-0">
				<Link
					href="/top/tracks"
					className="text-white font-bold text-lg flex gap-2 items-center"
				>
					<ChevronLeft />

					<p>Back</p>
				</Link>
			</div>

			<div className="flex justify-center p-6">
				<Suspense fallback={<TrackDetailsSkeleton />}>
					<TrackDetails trackId={trackId} />
				</Suspense>
			</div>
		</div>
	);
};

export default TrackPage;
