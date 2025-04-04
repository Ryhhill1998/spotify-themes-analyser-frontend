import TopArtistCardSkeleton from "../../components/common/TopArtistCardSkeleton";
import TopTitle from "../components/TopTitleAndTimeRanges";

const Loading = () => {
	return (
		<>
			<TopTitle name="artists" />

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
				{[...Array(50).keys()].map((_, index) => (
					<TopArtistCardSkeleton key={index} />
				))}
			</div>
		</>
	);
};

export default Loading;
