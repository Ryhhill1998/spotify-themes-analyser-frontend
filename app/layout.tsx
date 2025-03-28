import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Profile } from "@/app/api/dataTypes";
import { fetchProfile } from "@/app/api/data";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const Header = async () => {
	const profile: Profile = await fetchProfile();

	return (
		<header className="w-full flex justify-between items-center px-4 py-3">
			<Link href="/">
				<Image
					src="/spotify-icon-dark-mode.svg"
					alt="Spotify"
					width={35}
					height={35}
				/>
			</Link>

			<Navigation />

			<Link href="/profile">
				<Image
					src={profile.images[1].url}
					alt="Spotify profile picture"
					width={35}
					height={35}
					className="rounded-full"
				/>
			</Link>
		</header>
	);
};

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
			>
				<Header />

				{children}
			</body>
		</html>
	);
};

export default RootLayout;
