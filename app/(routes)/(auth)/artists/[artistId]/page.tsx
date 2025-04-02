import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import ArtistDetails from "./components/ArtistDetails";
import ArtistDetailsSkeleton from "./components/ArtistDetailsSkeleton";

const ArtistPage = async ({
	params,
}: {
	params: Promise<{ artistId: string }>;
}) => {
	const { artistId } = await params;

	return (
		<div className="container mx-auto bg-stone-900 rounded-md">
			<div className="p-6">
				<Link
					href="/top/artists"
					className="text-white font-bold text-lg flex gap-2 items-center"
				>
					<ChevronLeft />

					<p>Back</p>
				</Link>
			</div>

			<div className="flex p-6">
				<Suspense fallback={<ArtistDetailsSkeleton />}>
					<ArtistDetails artistId={artistId} />
				</Suspense>
			</div>
		</div>
	);
};

export default ArtistPage;
