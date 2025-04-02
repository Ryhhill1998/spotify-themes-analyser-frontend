const ArtistPage = async ({
	params,
}: {
	params: Promise<{ artistId: string }>;
}) => {
	const { artistId } = await params;

	return (
		<div>
			<h1>Artist Page</h1>
		</div>
	);
};

export default ArtistPage;
