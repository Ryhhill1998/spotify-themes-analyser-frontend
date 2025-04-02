const TopLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div className="container bg-stone-900 mx-auto p-6 rounded-md">
			{children}
		</div>
	);
};

export default TopLayout;
