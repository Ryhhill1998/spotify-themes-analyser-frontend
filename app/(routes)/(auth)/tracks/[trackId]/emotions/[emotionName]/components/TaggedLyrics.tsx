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
			className="text-stone-300 text-center"
		></div>
	);
};

export default TaggedLyrics;
