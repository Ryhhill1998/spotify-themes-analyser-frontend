"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
	const router = useRouter();

	return (
		<Button
			className="text-white font-bold text-lg flex gap-2 items-center cursor-pointer"
			onClick={() => router.back()}
		>
			<ChevronLeft />

			<p>Back</p>
		</Button>
	);
};

export default BackButton;
