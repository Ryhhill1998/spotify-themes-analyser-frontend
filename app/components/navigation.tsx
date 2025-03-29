"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routeDetails = [
	{ id: 1, route: "/profile", name: "Profile" },
	{ id: 2, route: "/top-artists", name: "Top Artists" },
	{ id: 3, route: "/top-tracks", name: "Top Tracks" },
	{ id: 4, route: "/top-emotions", name: "Top Emotions" },
];

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className="flex gap-2">
				{routeDetails.map(({ id, route, name }) => (
					<li key={id}>
						<Link
							href={route}
							className={`px-4 py-2 hover:bg-white hover:text-black text-sm rounded-sm ${
								pathname === route
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
