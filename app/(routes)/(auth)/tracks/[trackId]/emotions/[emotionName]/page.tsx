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
		<div className="container mx-auto bg-stone-900 p-6 rounded-md">
			<Link
				href="/top-emotions"
				className="text-white font-bold text-2xl mb-6 flex gap-2 items-center"
			>
				<ChevronLeft />

				<h1>
					Your Top{" "}
					{emotionName.charAt(0).toUpperCase() + emotionName.slice(1)}{" "}
					Track
				</h1>
			</Link>

			<div className="flex justify-center gap-10">
				<div className="flex flex-col gap-2">
					<Image
						src={track.images[0].url}
						alt={"Album image for track"}
						width={200}
						height={200}
						className="rounded-md"
					/>

					<p className="text-white text-xl font-bold">{track.name}</p>

					<p className="text-stone-300 text-md font-bold">
						{track.artist.name}
					</p>

					<p className=" text-stone-400 text-sm font-semibold">
						{track.albumName}
					</p>

					<p className=" text-stone-400 text-xs">
						{track.releaseDate.split("-")[0]}
					</p>
				</div>

				<div
					dangerouslySetInnerHTML={{
						__html: taggedLyrics,
					}}
					className="text-stone-400"
				></div>
			</div>
		</div>
	);
};

export default EmotionPage;
