import { Suspense } from "react";

import ProfileBanner from "@/app/(routes)/(auth)/profile/components/profile/ProfileBanner";
import TopArtistsSection from "@/app/(routes)/(auth)/profile/components/artists/TopArtistsSection";
import TopTracksSection from "@/app/(routes)/(auth)/profile/components/tracks/TopTracksSection";
import ProfileBannerSkeleton from "@/app/(routes)/(auth)/profile/components/profile/ProfileBannerSkeleton";
import TopTracksSectionSkeleton from "@/app/(routes)/(auth)/profile/components/tracks/TopTracksSectionSkeleton";
import TopArtistsSectionSkeleton from "@/app/(routes)/(auth)/profile/components/artists/TopArtistsSectionSkeleton";

const ProfilePage = () => {
	return (
		<div className="container bg-stone-900 mx-auto rounded-md">
			<Suspense fallback={<ProfileBannerSkeleton />}>
				<ProfileBanner />
			</Suspense>

			{/* <Suspense fallback={<TopArtistsSectionSkeleton />}>
				<TopArtistsSection />
			</Suspense>

			<Suspense fallback={<TopTracksSectionSkeleton />}>
				<TopTracksSection />
			</Suspense> */}
		</div>
	);
};

export default ProfilePage;
