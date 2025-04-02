import TopTrackCardSkeleton from "@/app/(routes)/(auth)/components/common/TopTrackCardSkeleton";
import TopTitle from "../components/TopTitle";

const Loading = () => {
	return (
		<>
			<TopTitle name="tracks" />

			<div>
				{[...Array(50).keys()].map((_, index) => (
					<TopTrackCardSkeleton key={index} position={index + 1} />
				))}
			</div>
		</>
	);
};

export default Loading;
