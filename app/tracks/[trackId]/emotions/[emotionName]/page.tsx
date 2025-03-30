import { fetchTrack, fetchTrackLyricsWithEmotionalTags } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const EmotionPage = async ({
	params,
}: {
	params: Promise<{ trackId: string; emotionName: string }>;
}) => {
	const { trackId, emotionName } = await params;

	const track: Track = await fetchTrack(trackId);
	const taggedLyrics: string = await fetchTrackLyricsWithEmotionalTags(
		trackId,
		emotionName
	);

	return (
		<div className="container mx-auto bg-stone-900 p-4 rounded-md">
			<Link
				href="/top-emotions"
				className="text-white p-4 font-bold text-lg mb-8 flex gap-2 items-center"
			>
				<ChevronLeft />

				<h1>
					Your Top{" "}
					{emotionName.charAt(0).toUpperCase() + emotionName.slice(1)}{" "}
					Track
				</h1>
			</Link>

			<div className="flex justify-center gap-20">
				<div className="flex flex-col gap-2">
					<Image
						src={track.images[0].url}
						alt={"Album image for track"}
						width={250}
						height={250}
					/>

					<p className="text-white text-2xl font-bold">
						{track.name}
					</p>

					<p className="text-stone-300 text-lg font-bold">
						{track.artist.name}
					</p>

					<div className="flex gap-2 text-stone-400 text-sm font-semibold">
						<p>{track.albumName}</p>
						<p>{track.releaseDate}</p>
					</div>
				</div>

				<div
					dangerouslySetInnerHTML={{
						__html: taggedLyrics,
					}}
					className="text-stone-300"
				></div>
			</div>
		</div>
	);
};

export default EmotionPage;
