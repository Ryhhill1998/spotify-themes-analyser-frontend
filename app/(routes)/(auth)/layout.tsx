import "@/app/globals.css";
import Navigation from "@/app/(routes)/(auth)/components/global/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/app/api/dataTypes";
import { fetchProfile } from "@/app/api/data";

const Header = async () => {
	const profile: Profile | null = await fetchProfile();

	return (
		<header className="w-full flex justify-between items-center px-4 py-3 sticky top-0 bg-black/75">
			<Link href="/">
				<Image
					src="/spotify-icon-dark-mode.svg"
					alt="Spotify"
					width={35}
					height={35}
				/>
			</Link>

			<Navigation />

			{profile ? (
				<Link href="/profile">
					<Image
						src={profile.images[1].url}
						alt="Spotify profile picture"
						width={35}
						height={35}
						className="rounded-full"
					/>
				</Link>
			) : (
				<div className="h-35 w-35 rounded-full bg-stone-900"></div>
			)}
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
			<Header />

			{children}
		</>
	);
};

export default AuthLayout;
