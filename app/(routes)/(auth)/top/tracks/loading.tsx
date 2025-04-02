import TopTrackCardSkeleton from "@/app/(routes)/(auth)/components/common/TopTrackCardSkeleton";

const Loading = () => {
	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			<h3 className="mb-6 text-white font-bold text-2xl">
				Your top tracks
			</h3>

			<div>
				{[...Array(50).keys()].map((_, index) => (
					<TopTrackCardSkeleton key={index} position={index + 1} />
				))}
			</div>
		</div>
	);
};

export default Loading;
