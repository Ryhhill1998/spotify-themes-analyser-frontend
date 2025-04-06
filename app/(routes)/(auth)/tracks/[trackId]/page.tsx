import { Suspense } from "react";
import TrackDetails from "./components/common/TrackDetails";
import TrackDetailsSkeleton from "./components/common/TrackDetailsSkeleton";

const TrackPage = async ({
	params,
}: {
	params: Promise<{ trackId: string }>;
}) => {
	const { trackId } = await params;

	return (
		<div className="container mx-auto bg-stone-900 rounded-md">
			<div className="p-6">
				<TrackDetailsSkeleton />

				<Suspense fallback={<TrackDetailsSkeleton />}>
					<TrackDetails trackId={trackId} />
				</Suspense>
			</div>
		</div>
	);
};

export default TrackPage;
