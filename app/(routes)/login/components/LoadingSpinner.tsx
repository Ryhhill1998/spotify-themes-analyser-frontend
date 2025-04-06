type LoadingSpinnerProps = {
	text: string;
};

const LoadingSpinner = ({ text }: LoadingSpinnerProps) => {
	return (
		<div className="flex flex-col gap-6 justify-center items-center h-full w-full bg-black absolute">
			<p className="text-white font-medium text-lg">{text}</p>

			<div className="h-10 w-10 border-4 border-t-white border-stone-600 rounded-full animate-spin"></div>
		</div>
	);
};

export default LoadingSpinner;
