import { fetchTrack, fetchTrackLyricsWithEmotionalTags } from "@/app/api/data";
import { Track } from "@/app/api/dataTypes";
import Image from "next/image";

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
		<div className="container mx-auto flex gap-4">
			<div className="flex flex-col gap-2">
				<Image
					src={track.images[0].url}
					alt={"Album image for track"}
					width={200}
					height={200}
				/>

				<p className="text-white">{track.name}</p>

				<p className="text-white">{track.artist.name}</p>

				<div className="flex gap-2">
					<p className="text-white">{track.albumName}</p>
					<p className="text-white">{track.releaseDate}</p>
				</div>
			</div>

			<div
				dangerouslySetInnerHTML={{
					__html: taggedLyrics,
				}}
				className="text-gray-300"
			></div>
		</div>
	);
};

export default EmotionPage;
