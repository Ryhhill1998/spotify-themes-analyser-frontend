"use client";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routeDetails = [
	{
		id: 2,
		route: "/top/artists",
		name: "Top Artists",
	},
	{ id: 3, route: "/top/tracks", name: "Top Tracks" },
	{
		id: 4,
		route: "/top/emotions",
		name: "Top Emotions",
	},
];

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav>
			<Drawer>
				<DrawerTrigger asChild className="block sm:hidden">
					<Button className="bg-stone-900 text-white">Menu</Button>
				</DrawerTrigger>

				<DrawerContent className="bg-stone-900 block sm:hidden">
					<DrawerHeader className="hidden">
						<DrawerTitle className="">Menu</DrawerTitle>
					</DrawerHeader>

					<div className="p-4 pb-0 flex flex-col gap-4">
						{routeDetails.map(({ id, route, name }) => (
							<Link
								key={id}
								href={`${route}/short-term`}
								className={`px-4 py-2 hover:bg-white hover:text-black text-sm rounded-sm ${
									pathname.startsWith(route)
										? "bg-white text-black"
										: "bg-nonoe text-white"
								}`}
							>
								{name}
							</Link>
						))}
					</div>

					<DrawerFooter>
						<DrawerClose asChild>
							<Button className="w-full bg-black">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>

			<ul className="gap-2 hidden sm:flex">
				{routeDetails.map(({ id, route, name }) => (
					<li key={id}>
						<Link
							href={`${route}/short-term`}
							className={`px-4 py-2 hover:bg-white hover:text-black text-sm rounded-sm ${
								pathname.startsWith(route)
									? "bg-white text-black"
									: "bg-nonoe text-white"
							}`}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
