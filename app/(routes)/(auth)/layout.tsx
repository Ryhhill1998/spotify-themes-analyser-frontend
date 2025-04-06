import "@/app/globals.css";
import Navigation from "@/app/(routes)/(auth)/components/global/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/app/api/dataTypes";
import { fetchProfile } from "@/app/api/data";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "lucide-react";

const HeaderSkeleton = async () => {
	return (
		<div className="w-full flex justify-between items-center px-4 py-3 sticky top-0 bg-black/75">
			<Image
				src="/spotify-icon-dark-mode.svg"
				alt="Spotify"
				width={35}
				height={35}
				className="w-[35px] h-[35px] aspect-square object-cover rounded-full"
			/>

			<Skeleton className="h-6 w-full invisible" />

			<Skeleton className="w-[35px] h-[35px] aspect-square object-cover rounded-full" />
		</div>
	);
};

const Header = async () => {
	const profile: Profile = await fetchProfile();

	return (
		<header className="w-full flex justify-between items-center px-4 py-3 sticky top-0 bg-black/75">
			<Link href="/">
				<Image
					src="/spotify-icon-dark-mode.svg"
					alt="Spotify"
					width={35}
					height={35}
					className="w-[35px] h-[35px] aspect-square object-cover rounded-full"
				/>
			</Link>

			<Navigation />

			<Link href="/profile">
				{profile.images?.length > 0 ? (
					<Image
						src={profile.images[1].url}
						alt="Spotify profile picture"
						width={35}
						height={35}
						className="rounded-full"
					/>
				) : (
					<User className="text-white" />
				)}
			</Link>
		</header>
	);
};

const AuthLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Suspense fallback={<HeaderSkeleton />}>
				<Header />
			</Suspense>

			{children}
		</>
	);
};

export default AuthLayout;
