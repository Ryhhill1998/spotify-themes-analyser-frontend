import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/Navigation";
import Image from "next/image";
import Link from "next/link";

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

const Header = () => {
	return (
		<header className="w-full flex justify-between items-center px-4 py-3">
			<Link href="/">
				<Image
					src="/spotify-icon-dark-mode.svg"
					alt="Spotify"
					width={40}
					height={40}
				/>
			</Link>

			<Navigation />

			<Image
				src="/spotify-icon-dark-mode.svg"
				alt="Spotify"
				width={40}
				height={40}
				className="invisible"
			/>
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
