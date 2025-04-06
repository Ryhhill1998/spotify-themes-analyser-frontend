"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type BackButtonProps = {
	imageUrl: string;
	alt: string;
};

const BackButtonAndImage = ({ imageUrl, alt }: BackButtonProps) => {
	const router = useRouter();

	return (
		<div className="flex justify-between gap-4 w-full sm:w-fit sm:flex-col">
			<ChevronLeft
				size={30}
				className="text-white cursor-pointer hover:text-stone-400"
				onClick={() => router.back()}
			/>

			<Image
				src={imageUrl}
				alt={alt}
				width={250}
				height={250}
				className="aspect-square object-cover rounded-md"
			/>

			<ChevronLeft
				size={30}
				className="text-white cursor-pointer hover:text-stone-400 invisible sm:hidden"
			/>
		</div>
	);
};

export default BackButtonAndImage;
