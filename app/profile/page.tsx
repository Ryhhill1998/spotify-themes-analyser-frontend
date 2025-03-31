import { Suspense } from "react";

import ProfileBanner from "./components/profile/ProfileBanner";
import TopArtistsSection from "./components/artists/TopArtistsSection";
import TopTracksSection from "./components/tracks/TopTracksSection";
import ProfileBannerSkeleton from "./components/profile/ProfileBannerSkeleton";
import TopTracksSectionSkeleton from "./components/tracks/TopTracksSectionSkeleton";
import TopArtistsSectionSkeleton from "./components/artists/TopArtistsSectionSkeleton";

const ProfilePage = () => {
	return (
		<div className="container bg-stone-900 mx-auto rounded-md">
			<Suspense fallback={<ProfileBannerSkeleton />}>
				<ProfileBanner />
			</Suspense>

			<Suspense fallback={<TopArtistsSectionSkeleton />}>
				<TopArtistsSection />
			</Suspense>

			<Suspense fallback={<TopTracksSectionSkeleton />}>
				<TopTracksSection />
			</Suspense>
		</div>
	);
};

export default ProfilePage;
