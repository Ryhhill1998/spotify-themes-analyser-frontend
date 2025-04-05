import Link from "next/link";

type TitleAndShowAllLinkProps = {
	name: string;
};

const TitleAndShowAllLink = ({ name }: TitleAndShowAllLinkProps) => {
	return (
		<div className="flex justify-between mb-4">
			<h3 className="text-white font-bold">Your top {name} this month</h3>

			<Link
				href={`/top/${name}/short-term`}
				className="text-stone-300 text-sm font-medium"
			>
				Show all
			</Link>
		</div>
	);
};

export default TitleAndShowAllLink;
