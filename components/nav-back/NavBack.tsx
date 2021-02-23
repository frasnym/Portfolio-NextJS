import React from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

export default function NavBack() {
	const router = useRouter();
	return (
		<nav className="mb-6">
			<span
				className="text-xl font-bold cursor-pointer"
				onClick={() => router.back()}
			>
				<FaArrowLeft className="inline-block mb-1 mr-3" /> Go back
			</span>
		</nav>
	);
}
