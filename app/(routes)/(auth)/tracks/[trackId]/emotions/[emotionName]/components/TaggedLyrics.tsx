import { fetchTrackLyricsWithEmotionalTags } from "@/app/api/data";

type TaggedLyricsProps = {
	trackId: string;
	emotionName: string;
};

const TaggedLyrics = async ({ trackId, emotionName }: TaggedLyricsProps) => {
	const taggedLyrics: string = await fetchTrackLyricsWithEmotionalTags(
		trackId,
		emotionName
	);

	return (
		<div
			dangerouslySetInnerHTML={{
				__html: taggedLyrics,
			}}
			className="text-stone-300 text-center bg-stone-800 w-full p-6"
		></div>
	);
};

export default TaggedLyrics;
