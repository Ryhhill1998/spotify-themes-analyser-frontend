type TopTitleProps = {
	name: string;
};

const TopTitle = ({ name }: TopTitleProps) => {
	return (
		<h3 className="mb-6 text-white font-bold text-2xl">Your top {name}</h3>
	);
};

export default TopTitle;
