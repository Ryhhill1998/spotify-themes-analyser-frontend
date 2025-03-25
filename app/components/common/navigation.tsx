import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const routeDetails = [
	{ id: 1, route: "/", name: "Home" },
	{ id: 2, route: "/top-artists", name: "Top Artists" },
	{ id: 3, route: "/top-tracks", name: "Top Tracks" },
	{ id: 4, route: "/top-emotions", name: "Top Emotions" },
];

const Navigation = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{routeDetails.map(({ id, route, name }) => (
					<NavigationMenuItem key={id}>
						<Link href={route} legacyBehavior passHref>
							<NavigationMenuLink className="bg-black text-white">
								{name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navigation;
