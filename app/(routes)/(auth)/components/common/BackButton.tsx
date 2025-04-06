"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
	const router = useRouter();

	return (
		<ChevronLeft
			size={30}
			className="text-white cursor-pointer hover:text-stone-400"
			onClick={() => router.back()}
		/>
	);
};

export default BackButton;
