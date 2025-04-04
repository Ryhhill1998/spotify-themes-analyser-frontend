import { fetchTrackLyricsWithEmotionalTags } from "@/app/api/data";

type TaggedLyricsProps = {
	trackId: string;
	emotionName: string;
};

const TaggedLyrics = async ({ trackId, emotionName }: TaggedLyricsProps) => {
	const taggedLyrics: string | null = await fetchTrackLyricsWithEmotionalTags(
		trackId,
		emotionName
	);

	if (!taggedLyrics) {
		return <></>;
	}

	return (
		<div
			dangerouslySetInnerHTML={{
				__html: taggedLyrics,
			}}
			className="text-stone-300 text-md"
		></div>
	);
};

export default TaggedLyrics;
