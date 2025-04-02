import TopArtistCardSkeleton from "../../components/common/TopArtistCardSkeleton";

const Loading = () => {
	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top artists
			</h3>

			<div className="grid grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] gap-y-4">
				{[...Array(50).keys()].map((_, index) => (
					<TopArtistCardSkeleton key={index} />
				))}
			</div>
		</div>
	);
};

export default Loading;
